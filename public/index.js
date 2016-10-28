var bindEvents = function(){
  // mmcss3.onClick binds touchstart or click based on desktop/touch device
  // (should be tappy.js?)
  $('#header_menu').on('click', function(e){
    notie.select('Menu', ' <b class="icon">▼</a> ', [
      {
        title: 'Home',
        color: '#555555',
        handler: function () {
          mmcss3.showPage('#home')
        }
      },
      {
        title: 'Media',
        color: '#444444',
        handler: function () {
          mmcss3.showPage('#media')
        }
      },
      {
        title: 'Calendar',
        color: '#222222',
        handler: function () {
          mmcss3.showPage('#calendar') //notie.alert(3, 'Foo bar!', 3)
        }
      }
    ])
  })

  $('#input').on('click', function(e){
    notie.input({
      type: 'email',
      placeholder: 'name@example.com',
      prefilledValue: 'jane@doe.com'
    }, 'Please enter your email:', 'Submit', 'Cancel', function(valueEntered) {
      notie.alert(1, 'You entered: ' + valueEntered,2)
    }, function(valueEntered) {
      notie.alert(3, 'You cancelled with woofr value: ' + valueEntered, 2)
    })
    FastClick.attach(document.body); // remove 300ms from all generated clickevents
    e.preventDefault(); // don't cascade into extra click-event
    //notie.confirm('Are you sure you want to do that?', 'Yes', 'Cancel', function() {
    //  notie.alert(1, 'Good choice!', 2, function(){
    //  })
    //})
  })

  $('#input').on('click', function(e){
    notie.input({
      type: 'email',
      placeholder: 'name@example.com',
      prefilledValue: 'jane@doe.com'
    }, 'Please enter your email:', 'Submit', 'Cancel', function(valueEntered) {
      notie.alert(1, 'You entered: ' + valueEntered,2)
    }, function(valueEntered) {
      notie.alert(3, 'You cancelled with woofr value: ' + valueEntered, 2)
    })
    FastClick.attach(document.body); // remove 300ms from all generated clickevents
    e.preventDefault(); // don't cascade into extra click-event
    //notie.confirm('Are you sure you want to do that?', 'Yes', 'Cancel', function() {
    //  notie.alert(1, 'Good choice!', 2, function(){
    //  })
    //})
  })

  $('#rest').on('click', function(e){
    $.api.addEndpoint("js/data.json")
    $.api['js/data.json'].getAll()
    .then( function(json){ 
      $('#foo').html( JSON.stringify(json) )
    })
  })

  $('#update').on('click', function(e){
    appCacheNanny.update()
  })

  $('#button_media').on('click', function(e){
    mmcss3.showPage('#media')
  })

}


var onReady = function(){
  bindEvents()
  window.mmcss3 = new micromaterial()
  window.mmcss3.registerElement("x-foo", new xFoo ) // registers dom element <x-foo> to browser
  window.mmcss3.registerElement("x-mediabutton", new xMediaButton ) 
  setTimeout( function(){ window.mmcss3.showPage('#home') }, 1000 )
}

var onUpdate = function(){
  appCacheNanny.on('updateready', function () {
    notie.confirm('Your app is outdated<br><br>update now?', 'Yes', 'No', function() {
      notie.alert(1, 'please wait')
      mmcss3.loading(true, function(){
        setTimeout( function(){ 
          $('.page').css({'display':'none'}) // hide all pages
          document.location.reload(1)
        },2000)
      })
    })
  })
}

woofr.initialize({
  updateInterval: 1000, // make this higher on productionserver
  onUpdate: onUpdate,   // update all cached files if 'cache.manifest' changed on server 
  ready: onReady        // start app
})
