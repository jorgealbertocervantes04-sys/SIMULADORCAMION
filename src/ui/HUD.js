export default class HUD{

constructor(){

this.root=

document.createElement("div");

this.root.id="hud";

document.body.appendChild(

this.root

);

}

setStage(stage){

this.root.innerHTML=

"ETAPA "+stage;

}

}