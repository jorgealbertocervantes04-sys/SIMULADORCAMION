import * as THREE from "three";

export default class HDR{

    constructor(scene,renderer,assets){

        this.scene=scene;

        this.renderer=renderer;

        this.assets=assets;

    }

    async load(){

        const hdr=

        await this.assets.loadHDR(

            "/assets/hdr/warehouse.hdr"

        );

        this.scene.environment=hdr;

        this.scene.background=hdr;

    }

}