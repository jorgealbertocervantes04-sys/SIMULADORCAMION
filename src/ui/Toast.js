export default class Toast{

constructor(){

this.container=document.createElement(

"div"

);

this.container.id="toast";

document.body.appendChild(

this.container

);

}

show(text){

this.container.innerHTML=text;

this.container.classList.add(

"visible"

);

clearTimeout(

this.timer

);

this.timer=setTimeout(()=>{

this.container.classList.remove(

"visible"

);

},3000);

}

}