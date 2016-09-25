Lightweight library which easifies development of offline-capable tablet/mobile webapps which:

<img src="https://raw.githubusercontent.com/coderofsalvation/woofr/master/doc/woofr1.png" width="23%" style="width:23%"/>
<img src="https://raw.githubusercontent.com/coderofsalvation/woofr/master/doc/woofr2.png" width="23%" style="width:23%"/>
<img src="https://raw.githubusercontent.com/coderofsalvation/woofr/master/doc/woofr3.png" width="23%" style="width:23%"/>
<img src="https://raw.githubusercontent.com/coderofsalvation/woofr/master/doc/woofr4.png" width="23%" style="width:23%"/>

## Usage 

    $ npm install woofr

Now just include the following in `public/index.html`:

    <link rel="stylesheet" type="text/css" href="dist/woofr.css"/>
    <script type="text/javascript" src="dist/woofr.min.js"></script>

## Boilerplate / Example 

Easier is to start with a demo using this boilerplate `index.css` + `index.js` + `index.html`:

    $ mkdir public
    $ cp node_modules/woofr/public/index* public/.
    $ cp node_modules/woofr/app.js app.js
    $ NODE_PATH=node_modules/woofr/node_modules node app.js
    listening at port 3000

Now surf to `http://localhost:3000` and you'll see the screenshots above

> NOTE: the example express `app.js` contains essential features which are __very__ important for 
the offline feature.

## Features 

* uses Webcomponents using [register-element](https://npmjs.org/package/document-register-element) polyfill
* supports Over-the-air-updates (when file changes, manual and automatic using [appcache-nanny](https://npmjs.org/package/appcache-nanny) )
* will work Offline too 
* removes the 300ms delay for click-events using [fastclick](https://npmjs.org/package/fastclick)
* easily communicate with REST api's using [restglue](https://npmjs.org/package/restglue)
* lightweight navigation & notifications using [notie](https://npmjs.org/package/notie)
* zepto (as minimal jquery alternative)
* polyfills so everything works from android >= 2
* cordova drop-in ready
* 28K in filesize gzipped
* includes example express-webserver which prevents all manifest-cache & CORS pitfalls


## Development notes:

    $ npm install
    $ npm run monitor

> now surf to http://localhost:3000

## Philosophy

Should work from android 2 and onwards.

## Tested on:

* Chrome 45
* Android 2.3.6
