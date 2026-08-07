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

export default class TruckLoader{

    constructor(scene,renderer,assets){

        this.scene=scene;

        this.renderer=renderer;

        this.assets=assets;

    }

    async load(){

        this.model=

        await this.assets.loadGLB(

            "/assets/models/truck.glb"

        );
        this.model.traverse(

child=>{

if(child.isMesh){

child.castShadow=true;

child.receiveShadow=true;

child.material.envMapIntensity=1.8;

}

}

);
        this.model.scale.set(

1,

1,

1

);

        this.scene.add(

this.model

);

    }

}

