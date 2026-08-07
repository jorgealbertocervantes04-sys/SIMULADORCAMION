import * as THREE from "three";

export default class Lighting {

    constructor(scene){

        this.scene = scene;

        this.createAmbient();

        this.createSun();

        this.createFill();

    }

    createAmbient(){

        const light = new THREE.HemisphereLight(

            0xffffff,

            0x444444,

            1.2

        );

        this.scene.add(light);

    }

    createSun(){

        const sun = new THREE.DirectionalLight(

            0xffffff,

            3

        );

        sun.position.set(

            18,

            25,

            12

        );

        sun.castShadow = true;

        sun.shadow.mapSize.width = 4096;

        sun.shadow.mapSize.height = 4096;

        sun.shadow.camera.left = -30;

        sun.shadow.camera.right = 30;

        sun.shadow.camera.top = 30;

        sun.shadow.camera.bottom = -30;

        sun.shadow.bias = -.0002;

        this.scene.add(sun);

    }

    createFill(){

        const fill = new THREE.DirectionalLight(

            0x77aaff,

            .45

        );

        fill.position.set(

            -12,

            8,

            -18

        );

        this.scene.add(fill);

    }

}