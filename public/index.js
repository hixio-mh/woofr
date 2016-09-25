var bindEvents = function(){
  // woofr.onClick binds touchstart or click based on desktop/touch device
  // (should be tappy.js?)
  woofr.onClick( '#menu', function(e){
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

  woofr.onClick( '#input', function(e){
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

  woofr.onClick( '#input', function(e){
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

  woofr.onClick( '#rest', function(e){
    woofr.api.addEndpoint("js/data.json")
    woofr.api['js/data.json'].getAll()
    .then( function(json){ 
      $('#foo').html( JSON.stringify(json) )
    })
  })

  woofr.onClick( '#update', function(e){
    appCacheNanny.update()
  })
}


woofr.initialize({
  updateInterval: 10000, // make this lower on productionserver
  ready: function(){
    bindEvents()
    woofr.registerElement("x-foo", new elementFoo ) // registers dom element <x-foo> to browser
  }
})
