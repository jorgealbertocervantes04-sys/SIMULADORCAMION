export default class ProgressBar{

constructor(){

this.root=

document.createElement(

"div"

);

this.root.id="progressBar";
this.root.innerHTML=`

<div class="track">

<div class="fill">

</div>

</div>

<div class="label">

0%

</div>

`;
this.fill=

this.root.querySelector(

".fill"

);

this.label=

this.root.querySelector(

".label"

);

document.body.appendChild(

this.root

);

}
update(percent){

this.fill.style.width=

percent+"%";

this.label.innerHTML=

percent+"%";

}
hide(){

this.root.style.display=

"none";

}

show(){

this.root.style.display=

"block";

}

}