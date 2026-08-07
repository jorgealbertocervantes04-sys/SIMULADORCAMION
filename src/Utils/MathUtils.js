import * as THREE from "three";

export function lerp(

a,

b,

t

){

return a+(b-a)*t;

}

export function clamp(

value,

min,

max

){

return Math.max(

min,

Math.min(

max,

value

)

);

}

export function smoothLookAt(

camera,

target,

speed=.08

){

camera.lookAt(

new THREE.Vector3(

lerp(

camera.position.x,

target.x,

speed

),

lerp(

camera.position.y,

target.y,

speed

),

lerp(

camera.position.z,

target.z,

speed

)

)

);

}