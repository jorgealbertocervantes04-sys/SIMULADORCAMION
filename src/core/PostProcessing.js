import { EffectComposer }

from "three/examples/jsm/postprocessing/EffectComposer.js";

import { RenderPass }

from "three/examples/jsm/postprocessing/RenderPass.js";

import { UnrealBloomPass }

from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

import * as THREE from "three"; 
export default class PostProcessing{

constructor(

renderer,

scene,

camera

){

this.composer=

new EffectComposer(

renderer

);
const renderPass=

new RenderPass(

scene,

camera

);

this.composer.addPass(

renderPass

);
const bloom=

new UnrealBloomPass(

new THREE.Vector2(

window.innerWidth,

window.innerHeight

),

0.25,

0.4,

0.8

);
this.composer.addPass(

bloom

);

}

render(){

this.composer.render();

}

}
