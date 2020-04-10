/**
* This script is based on & thanks to:
* Convert a single file-input element into a 'multiple' input list
*   Class by Stickman -- http://www.the-stickman.com
*      with thanks to: [for Safari fixes]
*         Luis Torrefranca -- http://www.law.pitt.edu
*     and Shawn Parker & John Pennypacker -- http://www.fuzzycoconut.com
*      [for duplicate name bug] 'neal'
*
*  a few additions and adjustments to the script by Michael Burford & Peter Burford -- www.ftponthego.com  - www.wifidisk.com
*/
function MultiSelector( list_target, max ){
this.list_target = list_target;
this.count = 0;
this.id = 0;
if( max ){
this.max = max;
} else {
this.max = -1;
};
this.addElement = function( element ){
if( element.tagName == 'INPUT' && element.type == 'file' ){
element.name = 'file_' + this.id++;
element.multi_selector = this;
element.onchange = function(){
var new_element = document.createElement( 'input' );
new_element.type = 'file';
this.parentNode.insertBefore( new_element, this );
this.multi_selector.addElement( new_element );
this.multi_selector.addListRow( this );
this.style.position = 'absolute';
this.style.left = '-1000px';
};
if( this.max != -1 && this.count >= this.max ){
element.disabled = true;
};
this.count++;
this.current_element = element;
} else {
alert( 'Error: not a file input element' );
};
};
this.addListRow = function( element ){
var new_row = document.createElement( 'div' );
new_row.className = 'uploadfile';
var new_row_button = document.createElement( 'input' );
new_row_button.type = 'button';
new_row_button.value = 'Delete';
new_row_button.className = 'deletebutton';
new_row.element = element;
new_row_button.onclick= function(){
this.parentNode.element.parentNode.removeChild( this.parentNode.element );
this.parentNode.parentNode.removeChild( this.parentNode );
this.parentNode.element.multi_selector.count--;
this.parentNode.element.multi_selector.current_element.disabled = false;
return false;
};
new_row.appendChild( new_row_button );
var new_row_text = document.createElement('span');
new_row_text.innerHTML = element.value;
new_row.appendChild( new_row_text );
this.list_target.appendChild( new_row );
};
};