export default class ChecklistPanel{

constructor(){

this.container=

document.createElement(

"div"

);

this.container.id=

"checklist";

document.body.appendChild(

this.container

);

}
render(points){

this.container.innerHTML="";

points.forEach(point=>{

const item=

document.createElement(

"div"

);

item.className=

"check-item";
item.innerHTML=`

<input

type="checkbox"

id="${point.id}">

<label

for="${point.id}">

${point.name}

</label>

`;
item.innerHTML=`

<input

type="checkbox"

id="${point.id}">

<label

for="${point.id}">

${point.name}

</label>

`;
item.querySelector(

"input"

).addEventListener(

"change",

e=>{

item.classList.toggle(

"done",

e.target.checked

);

}

);
this.container.appendChild(

item

);

});

}

}