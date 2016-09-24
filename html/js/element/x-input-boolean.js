// this uses bootstrapswitch 
//
// html:
//
//   <!-- material text input -->
//   <template id="-input-boolean">
//      <br>
//      <input type="checkbox" class="make-switch"></input>&nbsp;&nbsp;<b class="inputlabel"></b>
//   </template>
//
//   <x-input-boolean title="foo" value="1" type="text"/>

var elementInputBoolean = function(){

  this.attachedCallback = function(){
    var state = this.state = false
    this.innerHTML = document.getElementById("-input-boolean").innerHTML
    $(this).find('b.inputlabel').text(this.getAttribute("title"))
    var input = this.input = $(this).find('input')[0]
    var attributes = ["title", "placeholder", "name", "value"]
    for ( var i in attributes  ) {
      var attribute = attributes[i]
      if( this.getAttribute( attribute ) ) input.setAttribute( attribute, this.getAttribute(attribute) )
    }
    if( this.getAttribute("value") == "1" )
      this.input.setAttribute("checked", "checked")
    else this.input.removeAttribute("checked")
    input.setAttribute("data-on-text", "yes")
    input.setAttribute("data-off-text", "no")
    $(this.input).bootstrapSwitch()

    this.value = function(v){
      if( v === true || v === false ) $(input).bootstrapSwitch('state', v)
      else return $(input).bootstrapSwitch('state')
    }
  }

  this.detachedCallback = function(){}

  this.attributeChangedCallback = function( name, previousValue, value ){
    this.dirty = true
    if (previousValue == null) {
      // new
    } else if (value == null) {
      // removed
    } else {
      this.input.setAttribute("name", value)
      // update 
    }
  }  

}

