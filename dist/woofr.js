/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.7",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map// appCacheNanny
// =============
//
// Teaches your applicationCache some manners! Because, you know,
// http://alistapart.com/article/application-cache-is-a-douchebag
//

/* global define, applicationCache, addEventListener, localStorage */
'use strict'

;(function (root, factory) {
  var appCache = (typeof applicationCache === 'undefined') ? undefined : applicationCache

  // based on https://github.com/allouis/minivents/blob/master/minivents.js
  function Events () {
    var events = {}
    var api = this

    // listen to events
    api.on = function on (type, func, ctx) {
      if (!events[type]) (events[type] = [])
      events[type].push({f: func, c: ctx})
    }

    // stop listening to event / specific callback
    api.off = function off (type, func) {
      var list = events[type] || []
      var i = list.length = func ? list.length : 0
      while (i-- > 0) {
        if (func === list[i].f) list.splice(i, 1)
      }
    }

    // send event, callbacks will be triggered
    api.trigger = function trigger () {
      var args = Array.apply([], arguments)
      var list = events[args.shift()] || []
      var i = list.length
      var j
      for (j = 0; j < i; j++) {
        list[j].f.apply(list[j].c, args)
      }
    }

    // aliases
    api.bind = api.on
    api.unbind = api.off
    api.emit = api.trigger
  }

  if (typeof define === 'function' && define.amd) {
    define([], function () {
      root.appCacheNanny = factory(appCache, Events)
      return root.appCacheNanny
    })
  } else if (typeof exports === 'object') {
    module.exports = factory(appCache, Events)
  } else {
    root.appCacheNanny = factory(appCache, Events)
  }
})(this, function (applicationCache, Events) {
  var DEFAULT_MANIFEST_LOADER_PATH = '/appcache-loader.html'
  var DEFAULT_CHECK_INTERVAL = 30000

  var appCacheNanny = new Events()
  var nannyOptions = {
    loaderPath: DEFAULT_MANIFEST_LOADER_PATH,
    checkInterval: DEFAULT_CHECK_INTERVAL,
    offlineCheckInterval: DEFAULT_CHECK_INTERVAL
  }

  var iframe
  var setupDone = false
  var setupPending = false

  //
  //
  //
  appCacheNanny.isSupported = function isSupported () {
    return !!applicationCache
  }

  //
  // request the appcache.manifest file and check if there's an update
  //
  appCacheNanny.update = function update () {
    trigger('update')
    if (!setupDone) {
      setupCallbacks.push(appCacheNanny.update)
      if (!setupPending) {
        setup()
        setupPending = true
      }
      return true
    }
    if (!appCacheNanny.isSupported()) {
      return false
    }
    try {
      applicationCache.update()
      return true
    } catch (e) {
      // there might still be cases when ApplicationCache is not support
      // e.g. in Chrome, when returned HTML is status code 40X, or if
      // the applicationCache became obsolete
      appCacheNanny.update = noop
      return false
    }
  }

  //
  // start auto updating. Optionally pass interval in ms to
  // overwrite the current.
  //
  var intervalPointer
  appCacheNanny.start = function start (options) {
    if (options) appCacheNanny.set(options)

    if (!setupDone) {
      setupCallbacks.push(appCacheNanny.start)
      if (!setupPending) {
        setup()
        setupPending = true
      }
      return true
    }

    clearInterval(intervalPointer)

    // check with offline interval
    checkInterval = hasNetworkError ? appCacheNanny.get('offlineCheckInterval') : appCacheNanny.get('checkInterval')

    intervalPointer = setInterval(appCacheNanny.update, checkInterval)
    isCheckingForUpdatesFlag = true
    trigger('start')
  }

  //
  // stop auto updating
  //
  appCacheNanny.stop = function stop () {
    if (!isCheckingForUpdatesFlag) return
    clearInterval(intervalPointer)
    isCheckingForUpdatesFlag = false
    trigger('stop')
  }

  //
  // returns true if the nanny is checking periodically for updates
  //
  appCacheNanny.isCheckingForUpdates = function isCheckingForUpdates () {
    return isCheckingForUpdatesFlag
  }

  //
  // returns true if an update has been fully received, otherwise false
  //
  appCacheNanny.hasUpdate = function hasUpdate () {
    return hasUpdateFlag
  }

  //
  //
  //
  appCacheNanny.set = function setOption (key, value) {
    var property, newSettings
    if (typeof key === 'object') {
      newSettings = key
      for (property in newSettings) {
        if (newSettings.hasOwnProperty(property)) {
          nannyOptions[property] = newSettings[property]
        }
      }
      return
    }
    nannyOptions[key] = value
  }

  //
  //
  //
  appCacheNanny.get = function getOption (key) {
    var property
    var settings = {}
    if (key) {
      return nannyOptions[key]
    }

    for (property in nannyOptions) {
      if (nannyOptions.hasOwnProperty(property)) {
        settings[property] = nannyOptions[property]
      }
    }
    return settings
  }

  // Private
  // -------

  // this is the internal state of checkInterval.
  // It usually differs between online / offline state
  var checkInterval = DEFAULT_CHECK_INTERVAL

  // flag if there is a pending update, being applied after next page reload
  var hasUpdateFlag = false

  // flag whether the nanny is checking for updates in the background
  var isCheckingForUpdatesFlag = false

  // flag if there was an error updating the appCache, usually meaning
  // it couldn't connect, a.k.a. you're offline.
  var hasNetworkError = false

  //
  var isInitialDownload = false

  //
  // setup appCacheNanny
  //
  var noop = function () {}
  var APPCACHE_STORE_KEY = '_appcache_nanny'
  var setupCallbacks = []
  function setup () {
    var scriptTag

    try {
      isInitialDownload = !localStorage.getItem(APPCACHE_STORE_KEY)
      localStorage.setItem(APPCACHE_STORE_KEY, '1')
    } catch (e) {}

    if (!appCacheNanny.isSupported()) {
      appCacheNanny.update = noop
      return
    }

    // https://github.com/gr2m/appcache-nanny/issues/7
    if (applicationCache.status !== applicationCache.UNCACHED) {
      subscribeToEvents()
      setupPending = false
      setupDone = true
      setupCallbacks.forEach(function (callback) {
        callback()
      })
      return
    }

    // load the appcache-loader.html using an iframe
    iframe = document.createElement('iframe')
    iframe.src = nannyOptions.loaderPath
    iframe.style.display = 'none'
    iframe.onload = function () {
      // we use the iFrame's applicationCache Object now
      applicationCache = iframe.contentWindow.applicationCache

      subscribeToEvents()
      setupPending = false
      setupDone = true

      // adding a timeout prevented Safari 7.1.4 from throwing
      // a InvalidStateError on the first applicationCache.update() call
      setTimeout(function () {
        setupCallbacks.forEach(function (callback) {
          callback()
        })
      }, 100)
    }
    iframe.onerror = function () {
      throw new Error('/appcache-loader.html could not be loaded.')
    }

    scriptTag = document.getElementsByTagName('script')[0]
    scriptTag.parentNode.insertBefore(iframe, scriptTag)
  }

  //
  //
  //
  function subscribeToEvents () {
    // Fired when the manifest resources have been downloaded.
    on('updateready', handleUpdateReady)

    // fired when manifest download request failed
    // (no connection or 5xx server response)
    on('error', handleNetworkError)

    // fired when manifest download request succeeded
    // but server returned 404 / 410
    on('obsolete', handleNetworkObsolete)

    // fired when manifest download succeeded
    on('noupdate', handleNetworkSuccess)
    on('cached', handleNetworkSuccess)
    on('progress', handleNetworkSuccess)
    on('downloading', handleNetworkSuccess)

    // when browser goes online/offline, look for updates to make sure.
    addEventListener('online', appCacheNanny.update, false)
    addEventListener('offline', appCacheNanny.update, false)
  }

  //
  // interface to bind events to cache events
  //
  function on (eventName, callback) {
    applicationCache.addEventListener(eventName, callback, false)
  }

  //
  // Trigger event on appCacheNanny. Once an update is ready, we
  // keep looking for another update, but we stop triggering events.
  //
  function trigger (eventName, event) {
    if (hasUpdateFlag) return
    appCacheNanny.trigger(eventName, event)
  }

  //
  //
  //
  var pendingUpdateReady = false
  function handleUpdateReady () {
    // Safari and Firefox (in private mode) can get into an invalid
    // applicationCache state, which throws an InvalidStateError error
    // on applicationCache.swapCache(). To workaround that, we reset
    // everything and set a flag that the next "noupdate" event, that
    // will now be triggered when the iframe gets reloadd, is actually
    // an "updateready" event.
    if (applicationCache.status !== applicationCache.UPDATEREADY) {
      pendingUpdateReady = true
      reset()
      return
    }

    if (!hasUpdateFlag) {
      hasUpdateFlag = true
      // don't use trigger here, otherwise the event wouldn't get triggered
      appCacheNanny.trigger('updateready')
    }
    applicationCache.swapCache()
  }

  //
  //
  //
  function handleNetworkSuccess (event) {
    var prefix = ''

    // when page gets opened for the very first time, it already has
    // the correct assets, but appCache still triggers 'downloading',
    // 'progress' and 'cached' events. Once the first 'cached' event
    // gets triggered, all assets are cached offline. We prefix these
    // initial events with 'init:'
    if (isInitialDownload) {
      prefix = 'init:'
      if (event.type === 'cached') {
        isInitialDownload = false
      }
    }

    // re-trigger event via appCacheNanny
    if (pendingUpdateReady) {
      trigger('updateready')
      pendingUpdateReady = false
    } else {
      trigger(prefix + event.type, event)
    }

    if (!hasNetworkError) return
    hasNetworkError = false

    appCacheNanny.start()
    trigger('online')
  }

  //
  //
  //
  function handleNetworkError (error) {
    // re-trigger event via appCacheNanny
    trigger('error', error)

    if (hasNetworkError) return
    hasNetworkError = true

    // Edge case: private mode in Safari & FF say they support applicationCache,
    // but they fail. To get arround that, we only trigger the offline event
    // when applicationCache.status != uncached
    if (applicationCache.status === applicationCache.UNCACHED) return

    appCacheNanny.start()

    trigger('offline')
  }

  //
  // The 'obsolete' event gets triggered if the requested *.appcache file
  // has been removed or renamed. The intent behind renaming an *.appcache
  // file is to clear all locally cached files, it's the only way to do so.
  // Therefore we don't treet it as an error, it usually means that there
  // is an update availble that becomes visible after the next page reload.
  //
  function handleNetworkObsolete () {
    // re-trigger event via appCacheNanny
    trigger('obsolete')

    if (hasNetworkError) {
      hasNetworkError = false
      trigger('online')
    }

    // Once applicationCache status is obsolete, calling .udate() throws
    // an error, so we stop checking here
    appCacheNanny.stop()
  }

  function reset () {
    if (iframe) {
      iframe.remove()
    }

    setupDone = false
    setupPending = false
    appCacheNanny.update()
  }

  return appCacheNanny
})
/* Zepto v1.2.0 - with modules: fx
 zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});


//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($, undefined){
  var prefix = '', eventPrefix,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
    testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
    animationName, animationDuration, animationTiming, animationDelay,
    cssReset = {}

  function dasherize(str) { return str.replace(/([A-Z])/g, '-$1').toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

  if (testEl.style.transform === undefined) $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionDelay    = prefix + 'transition-delay'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationDelay     = prefix + 'animation-delay'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback, delay){
    if ($.isFunction(duration))
      callback = duration, ease = undefined, duration = undefined
    if ($.isFunction(ease))
      callback = ease, ease = undefined
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    if (delay) delay = parseFloat(delay) / 1000
    return this.anim(properties, duration, ease, callback, delay)
  }

  $.fn.anim = function(properties, duration, ease, callback, delay){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
        fired = false

    if (duration === undefined) duration = $.fx.speeds._default / 1000
    if (delay === undefined) delay = 0
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationDelay] = delay + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionDelay] = delay + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      } else
        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

      fired = true
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0){
      this.bind(endEvent, wrappedCallback)
      // transitionEnd is not always firing on older Android phones
      // so make sure it gets fired
      setTimeout(function(){
        if (fired) return
        wrappedCallback.call(that)
      }, ((duration + delay) * 1000) + 25)
    }

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})($);
/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function(e){"use strict";function Ot(){var e=yt.splice(0,yt.length);bt=0;while(e.length)e.shift().call(null,e.shift())}function Mt(e,t){for(var n=0,r=e.length;n<r;n++)zt(e[n],t)}function _t(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],At(r,L[Pt(r)])}function Dt(e){return function(t){ot(t)&&(zt(t,e),Mt(t.querySelectorAll(A),e))}}function Pt(e){var t=lt.call(e,"is"),n=e.nodeName.toUpperCase(),r=M.call(k,t?T+t.toUpperCase():x+n);return t&&-1<r&&!Ht(n,t)?-1:r}function Ht(e,t){return-1<A.indexOf(e+'[is="'+t+'"]')}function Bt(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target,s=e[g]||2,o=e[b]||3;xt&&(!i||i===t)&&t[c]&&r!=="style"&&(e.prevValue!==e.newValue||e.newValue===""&&(n===s||n===o))&&t[c](r,n===s?null:e.prevValue,n===o?null:e.newValue)}function jt(e){var t=Dt(e);return function(e){yt.push(t,e.target),bt&&clearTimeout(bt),bt=setTimeout(Ot,1)}}function Ft(e){St&&(St=!1,e.currentTarget.removeEventListener(E,Ft)),Mt((e.target||t).querySelectorAll(A),e.detail===f?f:u),it&&Rt()}function It(e,t){var n=this;pt.call(n,e,t),Tt.call(n,{target:n})}function qt(e,t){tt(e,t),kt?kt.observe(e,mt):(Et&&(e.setAttribute=It,e[s]=Ct(e),e[o](S,Tt)),e[o](w,Bt)),e[v]&&xt&&(e.created=!0,e[v](),e.created=!1)}function Rt(){for(var e,t=0,n=ut.length;t<n;t++)e=ut[t],O.contains(e)||(n--,ut.splice(t--,1),zt(e,f))}function Ut(e){throw new Error("A "+e+" type is already registered")}function zt(e,t){var n,r=Pt(e);-1<r&&(Lt(e,L[r]),r=0,t===u&&!e[u]?(e[f]=!1,e[u]=!0,r=1,it&&M.call(ut,e)<0&&ut.push(e)):t===f&&!e[f]&&(e[u]=!1,e[f]=!0,r=1),r&&(n=e[t+a])&&n.call(e))}function Wt(){}function Xt(e,n,r){var s=r&&r[l]||"",o=n.prototype,u=et(o),a=n.observedAttributes||B,f={prototype:u};st(u,v,{value:function(){if(K)K=!1;else if(!this[z]){this[z]=!0,new n(this),o[v]&&o[v].call(this);var e=Q[Y.get(n)];(!X||e.create.length>1)&&Jt(this)}}}),st(u,c,{value:function(e){-1<M.call(a,e)&&o[c].apply(this,arguments)}}),o[p]&&st(u,h,{value:o[p]}),o[d]&&st(u,m,{value:o[d]}),s&&(f[l]=s),e=e.toUpperCase(),Q[e]={constructor:n,create:s?[s,Z(e)]:[e]},Y.set(n,e),t[i](e.toLowerCase(),f),Kt(e),G[e].r()}function Vt(e){var t=Q[e.toUpperCase()];return t&&t.constructor}function $t(e){return typeof e=="string"?e:e&&e.is||""}function Jt(e){var t=e[c],n=t?e.attributes:B,r=n.length,i;while(r--)i=n[r],t.call(e,i.name||i.nodeName,null,i.value||i.nodeValue)}function Kt(e){return e=e.toUpperCase(),e in G||(G[e]={},G[e].p=new J(function(t){G[e].r=t})),G[e].p}function Qt(){W&&delete e.customElements,H(e,"customElements",{configurable:!0,value:new Wt}),H(e,"CustomElementRegistry",{configurable:!0,value:Wt});for(var n=function(n){var r=e[n];if(r){e[n]=function(n){var i,s;return n||(n=this),n[z]||(K=!0,i=Q[Y.get(n.constructor)],s=X&&i.create.length===1,n=s?Reflect.construct(r,B,i.constructor):t.createElement.apply(t,i.create),n[z]=!0,K=!1,s||Jt(n)),n},e[n].prototype=r.prototype;try{r.prototype.constructor=e[n]}catch(i){U=!0,H(r,z,{value:e[n]})}}},i=r.get(/^HTML[A-Z]*[a-z]/),s=i.length;s--;n(i[s]));t.createElement=function(e,t){var n=$t(t);return n?vt.call(this,e,Z(n)):vt.call(this,e)}}var t=e.document,n=e.Object,r=function(e){var t=/^[A-Z]+[a-z]/,r=function(e){var t=[],n;for(n in s)e.test(n)&&t.push(n);return t},i=function(e,t){t=t.toLowerCase(),t in s||(s[e]=(s[e]||[]).concat(t),s[t]=s[t.toUpperCase()]=e)},s=(n.create||n)(null),o={},u,a,f,l;for(a in e)for(l in e[a]){f=e[a][l],s[l]=f;for(u=0;u<f.length;u++)s[f[u].toLowerCase()]=s[f[u].toUpperCase()]=l}return o.get=function(n){return typeof n=="string"?s[n]||(t.test(n)?[]:""):r(n)},o.set=function(n,r){return t.test(n)?i(n,r):i(r,n),o},o}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}}),i="registerElement",s="__"+i+(e.Math.random()*1e5>>0),o="addEventListener",u="attached",a="Callback",f="detached",l="extends",c="attributeChanged"+a,h=u+a,p="connected"+a,d="disconnected"+a,v="created"+a,m=f+a,g="ADDITION",y="MODIFICATION",b="REMOVAL",w="DOMAttrModified",E="DOMContentLoaded",S="DOMSubtreeModified",x="<",T="=",N=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,C=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],k=[],L=[],A="",O=t.documentElement,M=k.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},_=n.prototype,D=_.hasOwnProperty,P=_.isPrototypeOf,H=n.defineProperty,B=[],j=n.getOwnPropertyDescriptor,F=n.getOwnPropertyNames,I=n.getPrototypeOf,q=n.setPrototypeOf,R=!!n.__proto__,U=!1,z="__dreCEv1",W=e.customElements,X=!!(W&&W.define&&W.get&&W.whenDefined),V=n.create||n,$=e.Map||function(){var t=[],n=[],r;return{get:function(e){return n[M.call(t,e)]},set:function(e,i){r=M.call(t,e),r<0?n[t.push(e)-1]=i:n[r]=i}}},J=e.Promise||function(e){function i(e){n=!0;while(t.length)t.shift()(e)}var t=[],n=!1,r={"catch":function(){return r},then:function(e){return t.push(e),n&&setTimeout(i,1),r}};return e(i),r},K=!1,Q=V(null),G=V(null),Y=new $,Z=String,et=n.create||function Zt(e){return e?(Zt.prototype=e,new Zt):this},tt=q||(R?function(e,t){return e.__proto__=t,e}:F&&j?function(){function e(e,t){for(var n,r=F(t),i=0,s=r.length;i<s;i++)n=r[i],D.call(e,n)||H(e,n,j(t,n))}return function(t,n){do e(t,n);while((n=I(n))&&!P.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),nt=e.MutationObserver||e.WebKitMutationObserver,rt=(e.HTMLElement||e.Element||e.Node).prototype,it=!P.call(rt,O),st=it?function(e,t,n){return e[t]=n.value,e}:H,ot=it?function(e){return e.nodeType===1}:function(e){return P.call(rt,e)},ut=it&&[],at=rt.cloneNode,ft=rt.dispatchEvent,lt=rt.getAttribute,ct=rt.hasAttribute,ht=rt.removeAttribute,pt=rt.setAttribute,dt=t.createElement,vt=dt,mt=nt&&{attributes:!0,characterData:!0,attributeOldValue:!0},gt=nt||function(e){Et=!1,O.removeEventListener(w,gt)},yt,bt=0,wt=!1,Et=!0,St=!0,xt=!0,Tt,Nt,Ct,kt,Lt,At;i in t||(q||R?(Lt=function(e,t){P.call(t,e)||qt(e,t)},At=qt):(Lt=function(e,t){e[s]||(e[s]=n(!0),qt(e,t))},At=Lt),it?(Et=!1,function(){var e=j(rt,o),t=e.value,n=function(e){var t=new CustomEvent(w,{bubbles:!0});t.attrName=e,t.prevValue=lt.call(this,e),t.newValue=null,t[b]=t.attrChange=2,ht.call(this,e),ft.call(this,t)},r=function(e,t){var n=ct.call(this,e),r=n&&lt.call(this,e),i=new CustomEvent(w,{bubbles:!0});pt.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[y]=i.attrChange=1:i[g]=i.attrChange=0,ft.call(this,i)},i=function(e){var t=e.currentTarget,n=t[s],r=e.propertyName,i;n.hasOwnProperty(r)&&(n=n[r],i=new CustomEvent(w,{bubbles:!0}),i.attrName=n.name,i.prevValue=n.value||null,i.newValue=n.value=t[r]||null,i.prevValue==null?i[g]=i.attrChange=0:i[y]=i.attrChange=1,ft.call(t,i))};e.value=function(e,o,u){e===w&&this[c]&&this.setAttribute!==r&&(this[s]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",i)),t.call(this,e,o,u)},H(rt,o,e)}()):nt||(O[o](w,gt),O.setAttribute(s,1),O.removeAttribute(s),Et&&(Tt=function(e){var t=this,n,r,i;if(t===e.target){n=t[s],t[s]=r=Ct(t);for(i in r){if(!(i in n))return Nt(0,t,i,n[i],r[i],g);if(r[i]!==n[i])return Nt(1,t,i,n[i],r[i],y)}for(i in n)if(!(i in r))return Nt(2,t,i,n[i],r[i],b)}},Nt=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,Bt(o)},Ct=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[i]=function(n,r){p=n.toUpperCase(),wt||(wt=!0,nt?(kt=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new nt(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,xt&&s[c]&&i.attributeName!=="style"&&(o=lt.call(s,i.attributeName),o!==i.oldValue&&s[c](i.attributeName,i.oldValue,o)))})}(Dt(u),Dt(f)),kt.observe(t,{childList:!0,subtree:!0})):(yt=[],t[o]("DOMNodeInserted",jt(u)),t[o]("DOMNodeRemoved",jt(f))),t[o](E,Ft),t[o]("readystatechange",Ft),rt.cloneNode=function(e){var t=at.call(this,!!e),n=Pt(t);return-1<n&&At(t,L[n]),e&&_t(t.querySelectorAll(A)),t}),-2<M.call(k,T+p)+M.call(k,x+p)&&Ut(n);if(!N.test(p)||-1<M.call(C,p))throw new Error("The type "+n+" is invalid");var i=function(){return a?t.createElement(h,p):t.createElement(h)},s=r||_,a=D.call(s,l),h=a?r[l].toUpperCase():p,p,d;return a&&-1<M.call(k,x+h)&&Ut(h),d=k.push((a?T:x)+p)-1,A=A.concat(A.length?",":"",a?h+'[is="'+n.toLowerCase()+'"]':h),i.prototype=L[d]=D.call(s,"prototype")?s.prototype:et(rt),Mt(t.querySelectorAll(A),u),i},t.createElement=vt=function(e,n){var r=$t(n),i=r?dt.call(t,e,Z(r)):dt.call(t,e),s=""+e,o=M.call(k,(r?T:x)+(r||s).toUpperCase()),u=-1<o;return r&&(i.setAttribute("is",r=r.toLowerCase()),u&&(u=Ht(s.toUpperCase(),r))),xt=!t.createElement.innerHTMLHelper,u&&At(i,L[o]),i}),Wt.prototype={constructor:Wt,define:X?function(e,t,n){if(n)Xt(e,t,n);else{var r=e.toUpperCase();Q[r]={constructor:t,create:[r]},Y.set(t,r),W.define(e,t)}}:Xt,get:X?function(e){return W.get(e)||Vt(e)}:Vt,whenDefined:X?function(e){return J.race([W.whenDefined(e),Kt(e)])}:Kt};if(!W)Qt();else try{(function(n,r,i){r[l]="a",n.prototype=et(HTMLAnchorElement.prototype),n.prototype.constructor=n,e.customElements.define(i,n,r);if(lt.call(t.createElement("a",{is:i}),"is")!==i||X&&lt.call(new n,"is")!==i)throw r})(function en(){return Reflect.construct(HTMLAnchorElement,[],en)},{},"document-register-element-a")}catch(Gt){Qt()}try{dt.call(t,"a","a")}catch(Yt){Z=function(e){return{is:e}}}})(window);/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.2.2+35df15ea
 */

(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){G=t}function r(t){Q=t}function o(){return function(){process.nextTick(a)}}function i(){return function(){B(a)}}function s(){var t=0,e=new X(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){t.port2.postMessage(0)}}function c(){return function(){setTimeout(a,1)}}function a(){for(var t=0;J>t;t+=2){var e=tt[t],n=tt[t+1];e(n),tt[t]=void 0,tt[t+1]=void 0}J=0}function f(){try{var t=require,e=t("vertx");return B=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[rt]&&k(r);var o=n._state;if(o){var i=arguments[o-1];Q(function(){x(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(e){return ut.error=e,ut}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){Q(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===it?S(t,e._result):e._state===st?j(t,e._result):E(e,void 0,function(e){g(t,e)},function(e){j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===et&&constructor.resolve===nt?b(t,n):r===ut?j(t,ut.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,_()):t(n)?w(e,n,v(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===ot&&(t._result=e,t._state=it,0!==t._subscribers.length&&Q(T,t))}function j(t,e){t._state===ot&&(t._state=st,t._result=e,Q(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+it]=n,o[i+st]=r,0===i&&t._state&&Q(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return ct.error=n,ct}}function x(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=P(r,o),i===ct?(c=!0,s=i.error,i=null):u=!0,n===i)return void j(n,d())}else i=o,u=!0;n._state!==ot||(a&&u?g(n,i):c?j(n,s):t===it?S(n,i):t===st&&j(n,i))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return at++}function k(t){t[rt]=at++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t){return new _t(this,t).promise}function q(t){var e=this;return new e(I(t)?function(n,r){for(var o=t.length,i=0;o>i;i++)e.resolve(t[i]).then(n,r)}:function(t,e){e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(t){this[rt]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&D(),this instanceof L?C(this,t):K())}function N(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[rt]||k(this.promise),I(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,U())}function U(){return new Error("Array Methods must be provided an Array")}function W(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=pt)}var z;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B,G,H,I=z,J=0,Q=function(t,e){tt[J]=t,tt[J+1]=e,J+=2,2===J&&(G?G(a):H())},R="undefined"!=typeof window?window:void 0,V=R||{},X=V.MutationObserver||V.WebKitMutationObserver,Z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,tt=new Array(1e3);H=Z?o():X?s():$?u():void 0===R&&"function"==typeof require?f():c();var et=l,nt=h,rt=Math.random().toString(36).substring(16),ot=void 0,it=1,st=2,ut=new M,ct=new M,at=0,ft=Y,lt=q,ht=F,pt=L;L.all=ft,L.race=lt,L.resolve=nt,L.reject=ht,L._setScheduler=n,L._setAsap=r,L._asap=Q,L.prototype={constructor:L,then:et,"catch":function(t){return this.then(null,t)}};var _t=N;N.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===ot&&t>n;n++)this._eachEntry(e[n],n)},N.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===nt){var o=v(t);if(o===et&&t._state!==ot)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===pt){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},N.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===ot&&(this._remaining--,t===st?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},N.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){n._settledAt(it,e,t)},function(t){n._settledAt(st,e,t)})};var dt=W,vt={Promise:pt,polyfill:dt};"function"==typeof define&&define.amd?define(function(){return vt}):"undefined"!=typeof module&&module.exports?module.exports=vt:"undefined"!=typeof this&&(this.ES6Promise=vt),dt()}).call(this);Function.prototype.bind=Function.prototype.bind||function(b){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");}var a  =Array.prototype.slice, f=a.call(arguments, 1), e=this, c=function(){}, d=function(){return e.apply(this instanceof c?this:b||window, f.concat(a.call(arguments)));};c.prototype=this.prototype;d.prototype=new c();return d;};
var micromaterial = function(zepto_or_jquery){

  var me = this

  this.isLoading = false
  this.page = {
    last: [], 
    current: false
  }

  this.loading = function(state,cb){
    $('#loadscreen').css({ 'opacity': (state ? 1.0 : 0.0 ) })
    if( this.isLoading ) clearTimeout( this.isLoading )
    this.isLoading = setTimeout( function(me,state){
      //if( !state ) $('#loadscreen').css({ 'display': 'none' })
      isLoading = false 
      if( cb ) cb(me,state)
    }, 500, this, state, cb )
  }

  this.back = function(){
    this.showPage( this.page.last.pop(), function(){
      $.showHeader(true)  
    }, true )
  }

  this.showHeader = function (state) {
    if( state ){
      $('body').addClass("showheader")
      $('img#header_logo').css({'margin-left': '0px'})
    }else{
      $('body').removeClass("showheader")
      $('#container').css({'height': '100%'})
    } 
  }

  this.showBackButton = function(state){
    var show = '0px'
    var hide = '-500px'
    if( state ){
      $('button#back').css({'margin-left': show}) // hide back button on homepage
      $('img#header_logo').css({'margin-left': hide})
    } else {
      $('button#back').css({'margin-left': hide})
      $('img#header_logo').css({'margin-left': show})
    }
  }

  this.showMenu = function(){
    $('.hidemenu').removeClass('hidemenu')
  }

  this.showPage = function(id,cb,no_history){
    var me = this;
    if( this.page.current != false && !no_history) 
      this.page.last.push( this.page.current )  // remember current page as last page
    this.page.current = id        // remember current page
    this.loading(true, function(){
      $('.page').css({'display':'none'})
      $(id).css({'display':'block'})
			$('#header h2').html( $(id).data('title') || '' ) 
      $('#container').css({'height': ($(window).height() - $('#header').height())+"px" }) 
      $('.page').css({'min-height': ($(window).height() - $('#header').height())+"px" }) 
      me.showBackButton( $(id+".nobackbutton").length == 0 )
      me.loading(false)
      if( cb ) cb()
    })
  }

  // wrapper function for registerElement
  this.registerElement = function (type, options) {
      for( i in options )
        if( typeof options[i] == "function" )
          options[i] = { value: options[i] }
      var prototype = { "prototype": Object.create( HTMLElement.prototype, options ) } 
      return document.registerElement( type, prototype )
  }

  this.init = function(){
    if( $ == undefined ) return console.error("micromaterialcss3: please include jquery or zepto")
    $('button#back').on('click', this.back.bind(this) )
  }

  this.init()

  var obj = {
    back: this.back.bind(this), 
    showPage: this.showPage.bind(this), 
    showHeader: this.showHeader.bind(this), 
    loading: this.loading.bind(this), 
    registerElement: this.registerElement.bind(this)
  }
  for ( var i in obj  ) $[i] = obj[i]
  return obj
}

new micromaterial() // create!
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.superagent=t()}}(function(){return function t(e,r,n){function s(o,a){if(!r[o]){if(!e[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(i)return i(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var p=r[o]={exports:{}};e[o][0].call(p.exports,function(t){var r=e[o][1][t];return s(r?r:t)},p,p.exports,t,e,r,n)}return r[o].exports}for(var i="function"==typeof require&&require,o=0;o<n.length;o++)s(n[o]);return s}({1:[function(t,e,r){function n(t){if(t)return s(t)}function s(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}"undefined"!=typeof e&&(e.exports=n),n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===e||n.fn===e){r.splice(s,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,s=r.length;n<s;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],2:[function(t,e,r){e.exports=function(t,e,r){for(var n=0,s=t.length,i=3==arguments.length?r:t[n++];n<s;)i=e.call(null,i,t[n],++n,t);return i}},{}],3:[function(t,e,r){function n(t){return null!=t&&"object"==typeof t}e.exports=n},{}],4:[function(t,e,r){var n=t("./is-object");r.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},r.parse=function(t){return this._parser=t,this},r.timeout=function(t){return this._timeout=t,this},r.then=function(t,e){return this.end(function(r,n){r?e(r):t(n)})},r.use=function(t){return t(this),this},r.get=function(t){return this._header[t.toLowerCase()]},r.getHeader=r.get,r.set=function(t,e){if(n(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},r.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},r.field=function(t,e){return this._getFormData().append(t,e),this}},{"./is-object":3}],5:[function(t,e,r){function n(t,e,r){return"function"==typeof r?new t("GET",e).end(r):2==arguments.length?new t("GET",e):new t(e,r)}e.exports=n},{}],superagent:[function(t,e,r){function n(){}function s(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function i(t){if(!g(t))return t;var e=[];for(var r in t)null!=t[r]&&o(e,r,t[r]);return e.join("&")}function o(t,e,r){return Array.isArray(r)?r.forEach(function(r){o(t,e,r)}):void t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}function a(t){for(var e,r,n={},s=t.split("&"),i=0,o=s.length;i<o;++i)r=s[i],e=r.split("="),n[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return n}function u(t){var e,r,n,s,i=t.split(/\r?\n/),o={};i.pop();for(var a=0,u=i.length;a<u;++a)r=i[a],e=r.indexOf(":"),n=r.slice(0,e).toLowerCase(),s=x(r.slice(e+1)),o[n]=s;return o}function h(t){return/[\/+]json\b/.test(t)}function p(t){return t.split(/ *; */).shift()}function c(t){return b(t.split(/ *; */),function(t,e){var r=e.split(/ *= */),n=r.shift(),s=r.shift();return n&&s&&(t[n]=s),t},{})}function l(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this.setStatusProperties(this.xhr.status),this.header=this.headers=u(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text?this.text:this.xhr.response):null}function f(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new l(r)}catch(e){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=e,t.rawResponse=r.xhr&&r.xhr.responseText?r.xhr.responseText:null,t.statusCode=r.xhr&&r.xhr.status?r.xhr.status:null,r.callback(t)}if(r.emit("response",e),t)return r.callback(t,e);if(e.status>=200&&e.status<300)return r.callback(t,e);var n=new Error(e.statusText||"Unsuccessful HTTP response");n.original=t,n.response=e,n.status=e.status,r.callback(n,e)})}function d(t,e){var r=w("DELETE",t);return e&&r.end(e),r}var y,m=t("emitter"),b=t("reduce"),v=t("./request-base"),g=t("./is-object");y="undefined"!=typeof window?window:"undefined"!=typeof self?self:this;var w=e.exports=t("./request").bind(null,f);w.getXHR=function(){if(!(!y.XMLHttpRequest||y.location&&"file:"==y.location.protocol&&y.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var x="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};w.serializeObject=i,w.parseString=a,w.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},w.serialize={"application/x-www-form-urlencoded":i,"application/json":JSON.stringify},w.parse={"application/x-www-form-urlencoded":a,"application/json":JSON.parse},l.prototype.get=function(t){return this.header[t.toLowerCase()]},l.prototype.setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=p(e);var r=c(e);for(var n in r)this[n]=r[n]},l.prototype.parseBody=function(t){var e=w.parse[this.type];return!e&&h(this.type)&&(e=w.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null},l.prototype.setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},l.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n="cannot "+e+" "+r+" ("+this.status+")",s=new Error(n);return s.status=this.status,s.method=e,s.url=r,s},w.Response=l,m(f.prototype);for(var _ in v)f.prototype[_]=v[_];f.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this},f.prototype.type=function(t){return this.set("Content-Type",w.types[t]||t),this},f.prototype.responseType=function(t){return this._responseType=t,this},f.prototype.accept=function(t){return this.set("Accept",w.types[t]||t),this},f.prototype.auth=function(t,e,r){switch(r||(r={type:"basic"}),r.type){case"basic":var n=btoa(t+":"+e);this.set("Authorization","Basic "+n);break;case"auto":this.username=t,this.password=e}return this},f.prototype.query=function(t){return"string"!=typeof t&&(t=i(t)),t&&this._query.push(t),this},f.prototype.attach=function(t,e,r){return this._getFormData().append(t,e,r||e.name),this},f.prototype._getFormData=function(){return this._formData||(this._formData=new y.FormData),this._formData},f.prototype.send=function(t){var e=g(t),r=this._header["content-type"];if(e&&g(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],"application/x-www-form-urlencoded"==r?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||s(t)?this:(r||this.type("json"),this)},l.prototype.parse=function(t){return y.console&&console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0"),this.serialize(t),this},l.prototype.serialize=function(t){return this._parser=t,this},f.prototype.callback=function(t,e){var r=this._callback;this.clearTimeout(),r(t,e)},f.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},f.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},f.prototype.withCredentials=function(){return this._withCredentials=!0,this},f.prototype.end=function(t){var e=this,r=this.xhr=w.getXHR(),i=this._query.join("&"),o=this._timeout,a=this._formData||this._data;this._callback=t||n,r.onreadystatechange=function(){if(4==r.readyState){var t;try{t=r.status}catch(e){t=0}if(0==t){if(e.timedout)return e.timeoutError();if(e.aborted)return;return e.crossDomainError()}e.emit("end")}};var u=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),t.direction="download",e.emit("progress",t)};this.hasListeners("progress")&&(r.onprogress=u);try{r.upload&&this.hasListeners("progress")&&(r.upload.onprogress=u)}catch(t){}if(o&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},o)),i&&(i=w.serializeObject(i),this.url+=~this.url.indexOf("?")?"&"+i:"?"+i),this.username&&this.password?r.open(this.method,this.url,!0,this.username,this.password):r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof a&&!s(a)){var p=this._header["content-type"],c=this._parser||w.serialize[p?p.split(";")[0]:""];!c&&h(p)&&(c=w.serialize["application/json"]),c&&(a=c(a))}for(var l in this.header)null!=this.header[l]&&r.setRequestHeader(l,this.header[l]);return this._responseType&&(r.responseType=this._responseType),this.emit("request",this),r.send("undefined"!=typeof a?a:null),this},w.Request=f,w.get=function(t,e,r){var n=w("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},w.head=function(t,e,r){var n=w("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},w.del=d,w.delete=d,w.patch=function(t,e,r){var n=w("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},w.post=function(t,e,r){var n=w("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},w.put=function(t,e,r){var n=w("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}},{"./is-object":3,"./request":5,"./request-base":4,emitter:1,reduce:2}]},{},[])("superagent")});var restglue=function(t){this.url=t||"",this.sandbox={},this.headers={},this.requestPre=[],this.requestPost=[]};if(restglue.prototype.beforeRequest=function(t){this.requestPre.push(t)},restglue.prototype.afterRequest=function(t){this.requestPost.push(t)},restglue.prototype.request=function(t,e,r,n,s){var i=this,o={method:t,url:e,query:n,payload:r,headers:s,api:this};n&&"string"==typeof n&&(o.url+=o.queryString=n),n&&"string"!=typeof n&&(o.url+=o.queryString="?"+i.toQueryString(n));for(var a in this.requestPre)this.requestPre[a](o);var u=this.getSandboxedUrl(o.method,o.url);if(u&&"string"!=typeof u)return u;e=u?u:o.url,console.dir(e);var h=superagent[t](e);for(a in this.headers)h.set(a,this.headers[a]);for(a in s)h.set(a,s[a]);return"get"!=t&&h.send(r),new Promise(function(t,u){h.end(function(h,p){for(a in i.requestPost)i.requestPost[a](o,p,h);h?(console.error(h),console.error(JSON.stringify({url:e,payload:r,query:n,headers:s})),u(h,p)):("object"==typeof p.body&&(p.body.getResponse=function(){return p}),t(p.body))})})},restglue.prototype.toQueryString=function(t){var e=[];for(var r in t)e.push(r+"="+encodeURI(t[r]));return e.join("&")},restglue.prototype.addEndpoint=function(t){var e=function(t,e){this.resourcename=t,this.api=e};e.prototype.getAll=function(t,e){return this.get(!1,t,e)},e.prototype.get=function(e,r,n){var s=this.api.url+"/"+t;return e&&(s+="/"+e),this.api.request("get",s,!1,r,n)};var r=["post","put","options","patch"];r.map(function(r){e.prototype[r]=function(e,n,s,i){var o=this.api.url+"/"+t+"/"+e;return this.api.request(r,o,n,s,i)}}),this[t]=new e(t,this)},restglue.prototype.sandboxUrl=function(t,e){this.sandbox[t]=e},restglue.prototype.getSandboxedUrl=function(t,e){var r={method:t,url:e,payload:{},headers:this.headers,api:this};for(var n in this.sandbox){var s=this.sandbox[n],t=t.toUpperCase();if(null!=e.match(new RegExp(n,"g"))){if(s.path){var i="";i=e.replace(this.url,""),i=i.replace(/\/?\?.*/,""),i=i.replace(/\/[0-9]+/,"");var o=s.path+i+"/"+t.toLowerCase()+".json";return console.log("sandboxed url: "+t+" "+e+" => "+o),o}if(s.data){console.log("sandboxed url: "+t+" "+e+" => {}");var a={body:s.data};for(var u in this.requestPost)this.requestPost[u](r,a);return new Promise(function(t,e){t(a.body)})}}}return!1},restglue.prototype.compose=function(t){return function(){return new Promise(function(e,r){var n,s=function(){e(n)};mapAsync(t,s,function(t,e,r){var s=t(n),i=s;s.then||(s=new Promise(function(t,e){t(i)})),s.then(function(t){n=t,r()})})})}},mapAsync=function(t,e,r){var n,s,i,o,a;s=[],i=0;for(o in t)a=t[o],n=function(t,n){return function(){var i;try{return r(n,t,s[t+1]||e)}catch(t){return i=t,e(new Error(i))}}},s.push(n(i++,a));return s[0]()},"undefined"!=typeof module&&"undefined"!=typeof module.exports){var superagent=require("superagent");module.exports=restglue}else window.restglue=restglue;
var notie=function(){function e(e){for(var t in e)N[t]=e[t]}function t(e,t,i){N.colorText.length>0&&(z.style.color=N.colorText),L(),R++,setTimeout(function(){R--},N.animationDelay+10),1===R&&(O?n(function(){o(e,t,i)}):o(e,t,i))}function o(e,t,o){O=!0;var i=0;switch(i="undefined"==typeof o||0===o?864e5:o>0&&o<1?1e3:1e3*o,M(W,"notie-background-success"),M(W,"notie-background-warning"),M(W,"notie-background-error"),M(W,"notie-background-info"),e){case 1:case"success":N.colorSuccess.length>0?W.style.backgroundColor=N.colorSuccess:H(W,"notie-background-success");break;case 2:case"warning":N.colorWarning.length>0?W.style.backgroundColor=N.colorWarning:H(W,"notie-background-warning");break;case 3:case"error":N.colorError.length>0?W.style.backgroundColor=N.colorError:H(W,"notie-background-error");break;case 4:case"info":N.colorInfo.length>0?W.style.backgroundColor=N.colorInfo:H(W,"notie-background-info")}z.innerHTML=t,W.style.top="-10000px",W.style.display="table",W.style.top="-"+W.offsetHeight-5+"px",j=setTimeout(function(){H(W,"notie-transition"),W.style.top=0,J=setTimeout(function(){n(function(){})},i)},20)}function n(e){clearTimeout(j),clearTimeout(J),W.style.top="-"+W.offsetHeight-5+"px",setTimeout(function(){M(W,"notie-transition"),W.style.top="-10000px",O=!1,e&&e()},N.animationDelay+10)}function i(e,t,o,i){N.colorText.length>0&&(K.style.color=N.colorText,V.style.color=N.colorText),L(),O?n(function(){c(e,t,o,i)}):c(e,t,o,i)}function c(e,t,o,n){function i(){K.innerHTML=t,V.innerHTML=o,Z.style.top="-10000px",Z.style.display="table",Z.style.top="-"+Z.offsetHeight-5+"px",$.style.display="block",setTimeout(function(){H(Z,"notie-transition"),Z.style.top=0,$.style.opacity="0.75",setTimeout(function(){q=!0},N.animationDelay+10)},20)}switch(A(),S(V,function(){l(),n&&setTimeout(function(){n()},N.animationDelay+10)}),M(Z,"notie-background-success"),M(Z,"notie-background-warning"),M(Z,"notie-background-error"),M(Z,"notie-background-info"),e){case 1:case"success":N.colorSuccess.length>0?Z.style.backgroundColor=N.colorSuccess:H(Z,"notie-background-success");break;case 2:case"warning":N.colorWarning.length>0?Z.style.backgroundColor=N.colorWarning:H(Z,"notie-background-warning");break;case 3:case"error":N.colorError.length>0?Z.style.backgroundColor=N.colorError:H(Z,"notie-background-error");break;case 4:case"info":N.colorInfo.length>0?Z.style.backgroundColor=N.colorInfo:H(Z,"notie-background-info")}q?(l(),setTimeout(function(){i()},N.animationDelay+10)):i()}function l(){Z.style.top="-"+Z.offsetHeight-5+"px",$.style.opacity="0",setTimeout(function(){M(Z,"notie-transition"),Z.style.top="-10000px",$.style.display="none",I(),q=!1},N.animationDelay+10)}function a(e,t,o,i,c){N.colorInfo.length>0&&(P.style.backgroundColor=N.colorInfo),N.colorSuccess.length>0&&(U.style.backgroundColor=N.colorSuccess),N.colorError.length>0&&(X.style.backgroundColor=N.colorError),N.colorText.length>0&&(Q.style.color=N.colorText,_.style.color=N.colorText,ee.style.color=N.colorText),L(),O?n(function(){r(e,t,o,i,c)}):r(e,t,o,i,c)}function r(e,t,o,n,i){function c(){Q.innerHTML=e,_.innerHTML=t,ee.innerHTML=o,G.style.top="-10000px",G.style.display="table",G.style.top="-"+G.offsetHeight-5+"px",te.style.display="block",setTimeout(function(){H(G,"notie-transition"),G.style.top=0,te.style.opacity="0.75",setTimeout(function(){oe=!0},N.animationDelay+10)},20)}A(),S(U,function(){d(),n&&setTimeout(function(){n()},N.animationDelay+10)}),S(X,function(){d(),i&&setTimeout(function(){i()},N.animationDelay+10)}),oe?(d(),setTimeout(function(){c()},N.animationDelay+10)):c()}function d(){G.style.top="-"+G.offsetHeight-5+"px",te.style.opacity="0",setTimeout(function(){M(G,"notie-transition"),G.style.top="-10000px",te.style.display="none",I(),oe=!1},N.animationDelay+10)}function s(e,t,o,i,c,l){N.colorInfo.length>0&&(ce.style.backgroundColor=N.colorInfo),N.colorSuccess.length>0&&(ae.style.backgroundColor=N.colorSuccess),N.colorError.length>0&&(re.style.backgroundColor=N.colorError),N.colorText.length>0&&(de.style.color=N.colorText,se.style.color=N.colorText,ue.style.color=N.colorText),L(),le.setAttribute("autocapitalize",e.autocapitalize||"none"),le.setAttribute("autocomplete",e.autocomplete||"off"),le.setAttribute("autocorrect",e.autocorrect||"off"),le.setAttribute("autofocus",e.autofocus||"true"),le.setAttribute("inputmode",e.inputmode||"verbatim"),le.setAttribute("max",e.max||""),le.setAttribute("maxlength",e.maxlength||""),le.setAttribute("min",e.min||""),le.setAttribute("minlength",e.minlength||""),le.setAttribute("placeholder",e.placeholder||""),le.setAttribute("spellcheck",e.spellcheck||"default"),le.setAttribute("step",e.step||"any"),le.setAttribute("type",e.type||"text"),le.value=e.prefilledValue||"",e.allowed?le.oninput=function(){if(Array.isArray(e.allowed)){for(var t="",o=e.allowed,n=0;n<o.length;n++)"an"===o[n]?t+="0-9a-zA-Z":"a"===o[n]?t+="a-zA-Z":"n"===o[n]&&(t+="0-9"),"sp"===o[n]&&(t+=" ");var i=new RegExp("[^"+t+"]","g")}else"object"==typeof e.allowed&&(i=e.allowed);le.value=le.value.replace(i,"")}:le.oninput=function(){return!0},O?n(function(){u(t,o,i,c,l)}):u(t,o,i,c,l)}function u(e,t,o,n,i){function c(){de.innerHTML=e,se.innerHTML=t,ue.innerHTML=o,ne.style.top="-10000px",ne.style.display="table",ne.style.top="-"+ne.offsetHeight-5+"px",ie.style.display="block",setTimeout(function(){H(ne,"notie-transition"),ne.style.top=0,ie.style.opacity="0.75",setTimeout(function(){me=!0,le.focus()},N.animationDelay+10)},20)}A(),S(ae,function(){m(),n&&setTimeout(function(){n(le.value)},N.animationDelay+10)}),S(re,function(){m(),i&&setTimeout(function(){i(le.value)},N.animationDelay+10)}),me?(m(),setTimeout(function(){c()},N.animationDelay+10)):c()}function m(){ne.style.top="-"+ne.offsetHeight-5+"px",ie.style.opacity="0",setTimeout(function(){M(ne,"notie-transition"),ie.style.display="none",ne.style.top="-10000px",I(),me=!1},N.animationDelay+10)}function p(e,t,o){N.colorInfo.length>0&&(ye.style.backgroundColor=N.colorInfo),N.colorNeutral.length>0&&(he.style.backgroundColor=N.colorNeutral),N.colorText.length>0&&(fe.style.color=N.colorText,he.style.color=N.colorText),L(),O?n(function(){y(e,t,o)}):y(e,t,o)}function y(e,t,o){function n(e){fe.innerHTML=e,pe.style.bottom="-10000px",pe.style.display="table",pe.style.bottom="-"+pe.offsetHeight-5+"px",ge.style.display="block",setTimeout(function(){H(pe,"notie-transition"),pe.style.bottom=0,ge.style.opacity="0.75",setTimeout(function(){ve=!0},N.animationDelay+10)},20)}A(),document.getElementById("notie-select-choices").innerHTML="",he.innerHTML=t;for(var i,c=0;c<o.length;c++){var l=document.createElement("div");if(l.innerHTML=o[c].title,H(l,"notie-select-choice"),be.appendChild(l),N.colorText.length>0&&(l.style.color=N.colorText),o[c].type)switch(o[c].type){case 1:N.colorSuccess.length>0?l.style.backgroundColor=N.colorSuccess:H(l,"notie-background-success");break;case 2:N.colorWarning.length>0?l.style.backgroundColor=N.colorWarning:H(l,"notie-background-warning");break;case 3:N.colorError.length>0?l.style.backgroundColor=N.colorError:H(l,"notie-background-error");break;case 4:N.colorInfo.length>0?l.style.backgroundColor=N.colorInfo:H(l,"notie-background-info")}else o[c].color&&(l.style.backgroundColor=o[c].color);if(l.style.backgroundColor=window.getComputedStyle(l).backgroundColor,c>0&&l.style.backgroundColor===i.style.backgroundColor&&H(i,"notie-select-choice-bottom-border"),!o[c].handler)throw new Error('notie.select choice "'+l.title+'" must have a handler');S(l,function(e){return function(){f(),setTimeout(function(){o[e].handler()},N.animationDelay+10)}}(c)),i=l}ve?(f(),setTimeout(function(){n(e)},N.animationDelay+10)):n(e)}function f(){pe.style.bottom="-"+pe.offsetHeight-5+"px",ge.style.opacity="0",setTimeout(function(){M(pe,"notie-transition"),pe.style.bottom="-10000px",ge.style.display="none",I(),ve=!1},N.animationDelay+10)}function g(){return O||oe||me||ve||Oe}function b(e){N.colorInfo.length>0&&(Te.style.backgroundColor=N.colorInfo),N.colorSuccess.length>0&&(We.style.backgroundColor=N.colorSuccess),N.colorError.length>0&&(Fe.style.backgroundColor=N.colorError),N.colorText.length>0&&(Te.style.color=N.colorText),L(),O?n(function(){h(e)}):h(e)}function h(e){function t(){ze=e.initial||new Date,v(ze),We.innerHTML=e.yesText||"OK",Fe.innerHTML=e.noText||"Cancel",ke.style.top="-10000px",ke.style.display="table",ke.style.top="-"+ke.offsetHeight-5+"px",Ye.style.display="block",setTimeout(function(){H(ke,"notie-transition"),ke.style.top=0,Ye.style.opacity="0.75",setTimeout(function(){Oe=!0},N.animationDelay+10)},20)}A(),S(We,function(){w(),e.yesCallback&&setTimeout(function(){e.yesCallback(ze)},N.animationDelay+10)}),S(Fe,function(){w(),e.noCallback&&setTimeout(function(){e.noCallback(ze)},N.animationDelay+10)}),Oe?(w(),setTimeout(function(){t()},N.animationDelay+10)):t()}function v(e){Me.innerHTML=N.dateMonths[e.getMonth()],Le.innerHTML=e.getDate(),Ae.innerHTML=e.getFullYear()}function k(){ze.setMonth(ze.getMonth()-1),v(ze)}function C(){ze.setMonth(ze.getMonth()+1),v(ze)}function T(){ze.setDate(ze.getDate()-1),v(ze)}function x(){ze.setDate(ze.getDate()+1),v(ze)}function E(){ze.setFullYear(ze.getFullYear()-1),v(ze)}function D(){ze.setFullYear(ze.getFullYear()+1),v(ze)}function w(){ke.style.top="-"+ke.offsetHeight-5+"px",Ye.style.opacity="0",setTimeout(function(){M(ke,"notie-transition"),ke.style.top="-10000px",Ye.style.display="none",I(),Oe=!1},N.animationDelay+10)}function H(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function M(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function L(){document.activeElement&&document.activeElement.blur()}function A(){je=document.body.style.height,Je=document.body.style.overflow,document.body.style.height="100%",document.body.style.overflow="hidden"}function I(){document.body.style.height=je,document.body.style.overflow=Je}var N={colorSuccess:"",colorWarning:"",colorError:"",colorInfo:"",colorNeutral:"",colorText:"",dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],animationDelay:300,backgroundClickDismiss:!0},S=function(e,t,o){e.bindClick?e.bindClick(t,o):t.onclick=o};S=S.bind(this,N);var W=document.createElement("div");W.id="notie-alert-outer",S(W,function(){n()}),document.body.appendChild(W);var F=document.createElement("div");F.id="notie-alert-inner",W.appendChild(F);var Y=document.createElement("div");Y.id="notie-alert-content",F.appendChild(Y);var z=document.createElement("span");z.id="notie-alert-text",Y.appendChild(z);var j,J,O=!1,R=0,Z=document.createElement("div");Z.id="notie-force-outer";var B=document.createElement("div");B.id="notie-force-inner",Z.appendChild(B);var K=document.createElement("span");K.id="notie-force-text",B.appendChild(K);var V=document.createElement("div");V.id="notie-force-button",Z.appendChild(V);var $=document.createElement("div");$.id="notie-force-background",H($,"notie-transition"),document.body.appendChild(Z),document.body.appendChild($);var q=!1,G=document.createElement("div");G.id="notie-confirm-outer";var P=document.createElement("div");P.id="notie-confirm-inner",G.appendChild(P);var Q=document.createElement("span");Q.id="notie-confirm-text",P.appendChild(Q);var U=document.createElement("div");U.id="notie-confirm-yes",G.appendChild(U);var X=document.createElement("div");X.id="notie-confirm-no",G.appendChild(X);var _=document.createElement("span");_.id="notie-confirm-text-yes",U.appendChild(_);var ee=document.createElement("span");ee.id="notie-confirm-text-no",X.appendChild(ee);var te=document.createElement("div");te.id="notie-confirm-background",H(te,"notie-transition"),S(te,function(){N.backgroundClickDismiss&&d()}),document.body.appendChild(G),document.body.appendChild(te);var oe=!1,ne=document.createElement("div");ne.id="notie-input-outer";var ie=document.createElement("div");ie.id="notie-input-background",H(ie,"notie-transition");var ce=document.createElement("div");ce.id="notie-input-inner",ne.appendChild(ce);var le=document.createElement("input");le.id="notie-input-field",ne.appendChild(le);var ae=document.createElement("div");ae.id="notie-input-yes",ne.appendChild(ae);var re=document.createElement("div");re.id="notie-input-no",ne.appendChild(re);var de=document.createElement("span");de.id="notie-input-text",ce.appendChild(de);var se=document.createElement("span");se.id="notie-input-text-yes",ae.appendChild(se);var ue=document.createElement("span");ue.id="notie-input-text-no",re.appendChild(ue),document.body.appendChild(ne),document.body.appendChild(ie),S(ie,function(){N.backgroundClickDismiss&&m()});var me=!1,pe=document.createElement("div");pe.id="notie-select-outer";var ye=document.createElement("div");ye.id="notie-select-inner",pe.appendChild(ye);var fe=document.createElement("span");fe.id="notie-select-text",ye.appendChild(fe);var ge=document.createElement("div");ge.id="notie-select-background",H(ge,"notie-transition");var be=document.createElement("div");be.id="notie-select-choices",pe.appendChild(be);var he=document.createElement("div");he.id="notie-select-cancel",pe.appendChild(he),document.body.appendChild(pe),document.body.appendChild(ge),S(ge,function(){N.backgroundClickDismiss&&f()}),S(he,function(){f()});var ve=!1,ke=document.createElement("div");ke.id="notie-date-outer";var Ce=document.createElement("div");Ce.id="notie-date-selector",ke.appendChild(Ce);var Te=document.createElement("div");Te.id="notie-date-inner",ke.appendChild(Te);var xe='<div class="notie-date-arrow-up"></div>',Ee='<div class="notie-date-arrow-down"></div>',De=document.createElement("div");De.className="notie-date-up",De.innerHTML=xe,Ce.appendChild(De),S(De,k);var we=document.createElement("div");we.className="notie-date-up",we.innerHTML=xe,Ce.appendChild(we),S(we,T);var He=document.createElement("div");He.className="notie-date-up",He.innerHTML=xe,Ce.appendChild(He),S(He,E);var Me=document.createElement("div");Me.className="notie-date-text",Ce.appendChild(Me);var Le=document.createElement("div");Le.className="notie-date-text",Ce.appendChild(Le);var Ae=document.createElement("div");Ae.className="notie-date-text",Ce.appendChild(Ae);var Ie=document.createElement("div");Ie.className="notie-date-down",Ie.innerHTML=Ee,Ce.appendChild(Ie),S(Ie,C);var Ne=document.createElement("div");Ne.className="notie-date-down",Ne.innerHTML=Ee,Ce.appendChild(Ne),S(Ne,x);var Se=document.createElement("div");Se.className="notie-date-down",Se.innerHTML=Ee,Ce.appendChild(Se),S(Se,D);var We=document.createElement("div");We.id="notie-date-yes",Te.appendChild(We);var Fe=document.createElement("div");Fe.id="notie-date-no",Te.appendChild(Fe);var Ye=document.createElement("div");Ye.id="notie-date-background",H(Ye,"notie-transition"),S(Ye,function(){N.backgroundClickDismiss&&w()}),document.body.appendChild(ke),document.body.appendChild(Ye);var ze,je,Je,Oe=!1;return window.addEventListener("keydown",function(e){var t=13===e.which||13===e.keyCode,o=27===e.which||27===e.keyCode;O?(t||o)&&n():oe?t?U.click():o&&d():me?t?ae.click():o&&m():ve?o&&f():Oe&&(t?We.click():o&&w())}),{setOptions:e,alert:t,alertHide:n,force:i,confirm:a,input:s,select:p,date:b,isShowing:g}}();"object"==typeof module&&module.exports&&(module.exports=notie);/*
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
