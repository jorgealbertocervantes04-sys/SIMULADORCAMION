import * as THREE from "three";

export default class Environment{

    constructor(scene){

        scene.background =

        new THREE.Color(

            0x12151b

        );

        scene.fog =

        new THREE.Fog(

            0x12151b,

            50,

            150

        );

    }

}