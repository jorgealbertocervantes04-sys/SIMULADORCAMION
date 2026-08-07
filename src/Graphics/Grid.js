import * as THREE from "three";

export default class Ground{

    constructor(scene){

        this.scene = scene;

        this.create();

    }

    create(){

        const geometry = new THREE.PlaneGeometry(

            300,

            300

        );

        const material = new THREE.MeshStandardMaterial({

            color:0x26282c,

            roughness:.92,

            metalness:.02

        });

        const mesh = new THREE.Mesh(

            geometry,

            material

        );

        mesh.rotation.x =

        -Math.PI/2;

        mesh.receiveShadow = true;

        this.scene.add(mesh);

    }

}