import * as THREE from "three";

const vector=new THREE.Vector3();

export default function worldToScreen(

position,

camera,

renderer

){

vector.copy(position);

vector.project(camera);

return{

x:(vector.x*.5+.5)*renderer.domElement.clientWidth,

y:(-vector.y*.5+.5)*renderer.domElement.clientHeight

};

}