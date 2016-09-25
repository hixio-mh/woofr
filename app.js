#!/usr/bin/env node
// vim:ft=coffee ts=2 sw=2 et :
// -*- mode:coffee -*-
"use strict";

var cluster = require('cluster')
let numCPUs = process.env.MULTICORE ? require('os').cpus().length : 1
if (cluster.isMaster) {
  let i = 0
  while (i < numCPUs) {
    cluster.fork()
    i++
  }
  cluster.on('exit', function(worker, code, signal) {
    console.log(`worker ${worker.process.pid} died..restarting`)
    cluster.fork()
    return
  })

} else {

  let manifest   = require('cache-manifest-generator');
  let compress   = require('compression')
  //minify     = require('minify')
  let express    = require("express")

  let app        = express()
  let bodyParser = require('body-parser')
  let port       = process.env.PORT || 3000
  let ip         = process.env.IP   || '0.0.0.0'
  
  // speed up data transfer
  app.use(compress());                                  // fast data

  // parse payloads
  app.use(bodyParser.json());                           // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true }));   // for parsing application/x-www-form-urlencoded

  // SPA routing
  //app.use(function(req, res, next) {
  //  if ( req.url != "/" && req.url.match(/(\/$|\.html$|\.js|\.css|\.ttf|\.png|\.gif|\.jpg|\.woff)/) == null )
  //    req.url = "/index.html"
  //  next()
  //})

  // CORS
  app.use(function(req, res, next) {
      var oneof = false
      if(req.headers.origin) {
          res.header('Access-Control-Allow-Origin', req.headers.origin)
          oneof = true
      }
      if(req.headers['access-control-request-method']) {
          res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method'])
          oneof = true
      }
      if(req.headers['access-control-request-headers']) {
          res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers'])
          oneof = true
      }
      if(oneof) {
          res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365)
      }

      // intercept OPTIONS method
      if (oneof && req.method == 'OPTIONS') {
          res.send(200)
      }
      else {
          next()
      }
  })  

  /*
   * Offline storage
   * Set Cache-Control: no-cache on all files served during development
   */
  if( process.env.NODE_ENV == "production" ){
    app.use(function(req, res, next) {
      res.set('Cache-Control', 'no-cache')
      next()
    })
  }

  app.get('/cache.manifest', manifest([
      { file: 'public', url: '/', ignore: /.*swp$/ }
    ])
  )

  // middleware stack: try static files
  app.use(express.static(__dirname + "/public"))


  console.log(`listening on ${ip}:${port}`)
  app.listen(port, ip)
}

