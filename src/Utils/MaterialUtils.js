export function improveMaterial(material){

material.envMapIntensity=2.5;

material.needsUpdate=true;

if(material.roughness!==undefined){

material.roughness*=.85;

}

if(material.metalness!==undefined){

material.metalness*=1.1;

}

}