import { OrbitControls }

from "three/examples/jsm/controls/OrbitControls.js";

export default class Controls{

    constructor(

        camera,

        renderer

    ){

        this.controls =

        new OrbitControls(

            camera,

            renderer.domElement

        );

        this.controls.enableDamping = true;

        this.controls.dampingFactor = .06;

        this.controls.target.set(

            0,

            2,

            0

        );

        this.controls.maxDistance = 40;

        this.controls.minDistance = 4;

        this.controls.maxPolarAngle =

        Math.PI*.48;

    }

    update(){

        this.controls.update();

    }

}