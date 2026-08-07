import * as THREE from "three";
import { gsap } from "gsap";

export default class CameraRig{

    constructor(camera,controls){

        this.camera = camera;

        this.controls = controls;

        this.target = new THREE.Vector3();

        this.defaultPosition = new THREE.Vector3(

            8,

            6,

            12

        );

        this.defaultTarget = new THREE.Vector3(

            0,

            2,

            0

        );

    }
    reset(){

    gsap.to(

        this.camera.position,

        {

            duration:1.8,

            x:this.defaultPosition.x,

            y:this.defaultPosition.y,

            z:this.defaultPosition.z,

            ease:"power3.inOut"

        }

    );

    gsap.to(

        this.controls.controls.target,

        {

            duration:1.8,

            x:this.defaultTarget.x,

            y:this.defaultTarget.y,

            z:this.defaultTarget.z,

            ease:"power3.inOut"

        }

    );

}
focus(position){

    const offset = new THREE.Vector3(

        2,

        1.8,

        2.6

    );

    gsap.to(

        this.camera.position,

        {

            duration:1.6,

            x:position.x+offset.x,

            y:position.y+offset.y,

            z:position.z+offset.z,

            ease:"power2.out"

        }

    );

    gsap.to(

        this.controls.controls.target,

        {

            duration:1.6,

            x:position.x,

            y:position.y,

            z:position.z,

            ease:"power2.out"

        }

    );

}

}