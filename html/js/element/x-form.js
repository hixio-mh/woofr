var elementForm = function(){

  this.createdCallback = function(){

    this.setData = function(data){
      this.data = data
      $('-input').each( function(i, item ){
        var resourceid  = item.getAttribute("resourceid")
        var resource    = item.getAttribute("resource")
        var key         = item.getAttribute("key")
        var structure   = item.resourcetype
        if( data[key] ) item.value(data[key])
      }) 
    }

    this.save = function(){
      data = {}
      $('-input').each( function(i, item ){
        var resourceid  = item.getAttribute("resourceid")
        var resource    = item.getAttribute("resource")
        var key         = item.getAttribute("key")
        var structure   = item.resourcetype
        if( !item.value ) return console.dir({err:"no value() function", element:item })
        data[resource]  = data[resource] || {'id':resourceid}
        data[resource][key] = item.value()
      })
      // do PUT calls to api
      for ( var i in data ) {
        var id = data[i].id
        delete data[i].id
        console.log("PATCH /"+i+" "+JSON.stringify(data[i]))
        spadmin.api[ i ].patch( id, data[i] )
        .then( function(res){
          console.dir(res)
          if( res.kind && res.kind == "error") spadmin.error( spadmin.lang.message.DATA_SAVE_ERROR )
          else spadmin.info( spadmin.lang.message.DATA_SAVE_OK )
        })
      }
    }
  }

  this.attachedCallback = function(){
  }

  this.detachedCallback = function(){}

  this.attributeChangedCallback = function( name, previousValue, value ){
    if (previousValue == null) {
      // new
    } else if (value == null) {
      // removed
    } else {
      // update 
    }
  }  

}

