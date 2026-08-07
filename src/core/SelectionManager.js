import * as THREE from "three";

export default class SelectionManager{

    constructor(){

        this.current=null;

        this.previousMaterial=null;

        this.highlightMaterial=

        new THREE.MeshPhysicalMaterial({

            color:0xff8800,

            emissive:0xff6600,

            emissiveIntensity:1,

            metalness:.45,

            roughness:.22,

            clearcoat:1

        });

    }
    select(mesh){

    if(this.current){

        this.restore();

    }

    this.current=mesh;

    this.previousMaterial=

    mesh.material;

    mesh.material=

    this.highlightMaterial;

}
restore(){

    if(

        !this.current

    ) return;

    this.current.material=

    this.previousMaterial;

    this.current=null;

    this.previousMaterial=null;

}

}