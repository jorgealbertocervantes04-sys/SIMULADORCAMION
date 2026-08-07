export default class InfoPanel{

constructor(){

this.container=document.createElement(

"div"

);

this.container.id="infoPanel";

document.body.appendChild(

this.container

);
this.container.innerHTML=`

<h2>

Inspección

</h2>

<h3 id="componentTitle">

Seleccione un componente

</h3>

<p id="componentDescription">

Pulse una pieza del tractocamión para visualizar información.

</p>

`;
this.title=

document.getElementById(

"componentTitle"

);

this.description=

document.getElementById(

"componentDescription"

);

}
update(

title,

description

){

this.title.innerHTML=title;

this.description.innerHTML=description;

}
clear(){

this.title.innerHTML=

"Seleccione un componente";

this.description.innerHTML="";

}

}