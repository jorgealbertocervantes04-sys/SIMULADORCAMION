import { gsap } from "gsap";

export default function pulse(mesh){

gsap.to(

mesh.scale,

{

x:1.08,

y:1.08,

z:1.08,

repeat:-1,

yoyo:true,

duration:.8,

ease:"power1.inOut"

}

);

}