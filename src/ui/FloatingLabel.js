export default class FloatingLabel{

constructor(){

this.element=

document.createElement(

"div"

);

this.element.className=

"floatingLabel";

document.body.appendChild(

this.element

);

}
setText(text){

this.element.innerHTML=text;

}
setPosition(x,y){

this.element.style.left=

x+"px";

this.element.style.top=

y+"px";

}
show(){

this.element.style.opacity=1;

}
hide(){

this.element.style.opacity=0;

}
}