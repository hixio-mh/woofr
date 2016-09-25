/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var woofr = {
    touch: false,
    CLICK: "click",
    opts: false,

    // Application Constructor
    initialize: function(opts) {
      this.opts = opts
      this.bindEvents();
    },
    
    dispatchEvent: function(eventName, data){ // android < 5 compatible events
       var event = document.createEvent('Event');
       event.initEvent(eventName,  data,  false);
       document.dispatchEvent(event)
    }, 
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
      // if `npm start` is running, assume cordova is not here
      var isCordovaApp = !!window.cordova;
      if( !isCordovaApp || String(document.location.href).match(/:3000/) != null ) 
        woofr.dispatchEvent( "deviceready",  true )
    },

    // wrapper function for registerElement
    registerElement: function (type, options) {
      for( i in options )
        if( typeof options[i] == "function" )
          options[i] = { value: options[i] }
      var prototype = { "prototype": Object.create( HTMLElement.prototype, options ) } 
      return document.registerElement( type, prototype )
    },

    // deviceready Event Handler
    onDeviceReady: function() {
      $(document).ready(function(){
        // Check for touchscreen, and if so, remap "click" to "touchstart"
        this.HASTOUCH =  (typeof document.body.ontouchstart !== "undefined") ? true : false
        this.CLICK = this.HASTOUCH ? "touchstart" : "click"

        // update all cached files if 'cache.manifest' changed on server 
        appCacheNanny.on('updateready', function () {
          notie.confirm('Your app is outdated<br><br>update now?', 'Yes', 'No', function() {
            notie.alert(1, 'please wait')
            setTimeout( function(){ 
              document.location.reload(1)
            },1000)
          })
        })
        appCacheNanny.start({checkInterval: woofr.opts.updateInterval || 30000})

        if( document.documentElement && document.documentElement.requestFullscreen )
          document.documentElement.requestFullscreen();

        FastClick.attach(document.body);
        notie.setOptions({
          animationDelay: 300, // Be sure to also change "transition: all 0.3s ease" variable in .scss file
          backgroundClickDismiss: true
        })
        // setup api
        woofr.api = new restglue()
        woofr.api.headers['Content-Type'] = 'application/json'
        // start to check for online server updates every 30s
        appCacheNanny.start()
        if( woofr.opts.ready ) woofr.opts.ready()
      })
    },

    onClick: function(id,cb){
      el = document.querySelector(id)
      if( !el ) return console.error('objectid '+id+' does not exist')
      el.addEventListener( this.CLICK, function(e){
        cb(e)
        if( woofr.HASTOUCH ){
          FastClick.attach(document.body);
          e.preventDefault(); // don't cascade into extra click-event
        }
      })
    },

};
