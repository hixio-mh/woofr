var elementInput = function(){

  this.createdCallback = function(){
  }

  this.attachedCallback = function(){
    var resourcename = this.resourcename = this.getAttribute("resource")
    var key          = this.key          = this.getAttribute("key")
    var resource     = this.resource     = null // #spadmin.data.structure.structure[resourcename]
    var schema       = this.schema       = null // #spadmin.elementcore.jsonschema[resourcename].properties[key]
   
    this.value = function(value){
      console.log(this.key)
      if( value ) input.value(value)
      else return input.value()
    }

    this.chooseInputType = function(resourcetype){
      switch(resourcetype){
        case "string":
        case "boolean":
        case "integer": return resourcetype; break;
        case "float":   return "integer"; break;
      }
      console.log('resourcetype '+resourcetype+' not found')
    }

    var resourcetype = this.resourcetype = resource.structure[ key ]
    console.log("resource '"+resourcename+":"+key+"' : "+this.chooseInputType(resourcetype.type)) 
    var input = this.input = document.createElement("-input-"+ this.chooseInputType(resourcetype.type) )
    input.setAttribute("title", resourcetype.description )
    input.setAttribute("placeholder", "enter "+ resourcetype.description.toLowerCase()+" here" )
    input.setAttribute("value", "" )
    if( this.getAttribute("disabled") ) input.setAttribute("disabled", "disabled")
    this.appendChild(input)
    if( this.schema.validate && this.input.setValidator ) 
      this.input.setValidator( this.schema.validate )
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
