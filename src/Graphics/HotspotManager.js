import * as THREE from "three";

import Hotspot from "./Hotspot.js";

import InspectionPoints

from "../data/InspectionPoints.js";

export default class HotspotManager{

constructor(scene){

this.scene=scene;

this.items=[];

this.create();

}
create(){

InspectionPoints.forEach(

point=>{

const hotspot=

new Hotspot(

new THREE.Vector3(

...point.position

)

);

hotspot.id=

point.id;

this.scene.add(

hotspot.group

);

this.items.push(

hotspot

);

}

);

}
update(camera,time){

this.items.forEach(

item=>{

item.update(

camera,

time

);

}

);

}
find(id){

return this.items.find(

item=>item.id===id

);

}
showAll(){

this.items.forEach(

h=>{

h.setVisible(true);

});

}

}