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
var app = {
    touch: false,
    CLICK: "click",

    // Application Constructor
    initialize: function() {
      // Check for touchscreen, and if so, remap "click" to "touchstart"
      this.HASTOUCH =  (typeof document.body.ontouchstart !== "undefined") ? true : false
      this.CLICK = this.HASTOUCH ? "touchstart" : "click"

      var me = this
      // *FIXME* need onready
      setTimeout( function(){
        me.registerElement("x-input", new elementInput ) // registers dom element <-input> to browser
        me.registerElement("x-form", new elementForm ) // registers dom element <-resource> to browser
        me.registerElement("x-input-boolean", new elementInputBoolean ) // registers dom element <-input> to browser
        me.registerElement("x-input-integer", new elementInputInteger ) // registers dom element <-input> to browser
        me.registerElement("x-input-string", new elementInputString ) // registers dom element <-input> to browser
        FastClick.attach(document.body);
        notie.setOptions({
          animationDelay: 300, // Be sure to also change "transition: all 0.3s ease" variable in .scss file
          backgroundClickDismiss: true
        })

        me.bindEvents();
      }, 100)
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
      this.bindTest()
      // if `npm start` is running, assume cordova is not here
      var isCordovaApp = !!window.cordova;
      if( !isCordovaApp || String(document.location.href).match(/:3000/) != null ) 
        app.dispatchEvent( "deviceready",  true )
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
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        this.api = new restglue()
        this.api.headers['Content-Type'] = 'application/json'
        this.api.addEndpoint("js/data.json")
        this.api['js/data.json'].getAll()
        .then( function(json){ 
          console.log( JSON.stringify(json) )
        })
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    onClick: function(el,cb){
      el.addEventListener( this.CLICK, function(e){
        cb(e)
        if( app.HASTOUCH ){
          FastClick.attach(document.body);
          e.preventDefault(); // don't cascade into extra click-event
        }
      })
    },

    bindTest: function(){
      this.onClick( document.querySelector('#menu'), function(e){
        notie.select('Menu', ' <b class="icon">▼</a> ', [
          {
            title: 'Home',
            color: '#555555',
            handler: function () {
              notie.alert(1, 'Share item!', 3)
            }
          },
          {
            title: 'Page 1',
            color: '#444444',
            handler: function () {
              notie.alert(1, 'Open item!', 3)
            }
          },
          {
            title: 'Page 2',
            color: '#333333',
            handler: function () {
              notie.alert(2, 'Edit item!', 3)
            }
          },
          {
            title: 'Page 3',
            color: '#222222',
            handler: function () {
              notie.alert(3, 'Delete item!', 3)
            }
          }
        ])
      })

      this.onClick( document.querySelector('#test'), function(e){
        notie.input({
          type: 'email',
          placeholder: 'name@example.com',
          prefilledValue: 'jane@doe.com'
        }, 'Please enter your email:', 'Submit', 'Cancel', function(valueEntered) {
          notie.alert(1, 'You entered: ' + valueEntered,2)
        }, function(valueEntered) {
          notie.alert(3, 'You cancelled with this value: ' + valueEntered, 2)
        })
        FastClick.attach(document.body);
        e.preventDefault(); // don't cascade into extra click-event
        //notie.confirm('Are you sure you want to do that?', 'Yes', 'Cancel', function() {
        //  notie.alert(1, 'Good choice!', 2, function(){
        //  })
        //})
      })

    }
};

app.initialize();
