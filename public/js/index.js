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
var woofr = function(){
    this.touch = false
    this.opts = false

    // Application Constructor
    this.initialize = function(opts) {
      var me = this
      this.opts = opts
      this.bindEvents();
      // Check for touchscreen, and if so, remap "click" to "touchstart"
      this.HASTOUCH =  (typeof document.body.ontouchstart !== "undefined") ? true : false
      // monkey patch zepto/jquery clicks with hammertime for improved responsivess.
      $._on = $.on 
      $.on = (function(){
        alert("ja!")
        if( argument[0] == 'click' && woofr.HASTOUCH )
          me.hammertime.on('tap', argument[1]) 
        else 
          this._on.apply(this, arguments)
      }).bind($)
    }
    
    this.dispatchEvent = function(eventName, data){ // android < 5 compatible events
       var event = document.createEvent('Event');
       event.initEvent(eventName,  data,  false);
       document.dispatchEvent(event)
    }

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    this.bindEvents = function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
      // if `npm start` is running, assume cordova is not here
      var isCordovaApp = !!window.cordova;
      if( !isCordovaApp || String(document.location.href).match(/:3000/) != null ) 
        this.dispatchEvent( "deviceready",  true )
    },

    // deviceready Event Handler
    this.onDeviceReady = function() {
      appCacheNanny.start({checkInterval: this.opts.updateInterval || 30000})

      if( document.documentElement && document.documentElement.requestFullscreen )
        document.documentElement.requestFullscreen();

      notie.setOptions({
        animationDelay: 300, // Be sure to also change "transition: all 0.3s ease" variable in .scss file
        backgroundClickDismiss: true, 
        bindClick: function(el, cb){
          $(el).on('click', cb)
        }
      })
      // setup api
      $.api = woofr.api = new restglue()
      woofr.api.headers['Content-Type'] = 'application/json'
      // start to check for online server updates every 30s
      appCacheNanny.start()
      if( this.opts.ready ) this.opts.ready()
    }

    return {
      initialize: this.initialize.bind(this)
    }
};

woofr = new woofr()
