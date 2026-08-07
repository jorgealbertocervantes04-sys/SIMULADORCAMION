import Renderer from "./Renderer.js";

import Camera from "./Camera.js";

import Scene from "./Scene.js";

import Resize from "./Resize.js";

import Clock from "./Clock.js";

import Controls from "./Controls.js";

import Environment from "./Enviroment.js";

import Lighting from "../Graphics/Lighting.js";

import Ground from "../Graphics/Ground.js";

import Grid from "../Graphics/Grid.js";

export default class SceneManager{

    constructor(){

        this.scene=new Scene();

        this.camera=new Camera();

        this.renderer=new Renderer();

        this.clock=new Clock();

        this.controls=

        new Controls(

            this.camera,

            this.renderer

        );

        new Environment(

            this.scene

        );

        new Lighting(

            this.scene

        );

        new Ground(

            this.scene

        );

        new Grid(

            this.scene

        );

    }

    start(){

        document

        .getElementById("app")

        .appendChild(

            this.renderer.domElement

        );

        Resize(

            this.camera,

            this.renderer

        );

        this.animate();

    }

    animate=()=>{

        requestAnimationFrame(

            this.animate

        );

        this.clock.update();

        this.controls.update();

        this.renderer.render(

            this.scene,

            this.camera

        );

    }

}