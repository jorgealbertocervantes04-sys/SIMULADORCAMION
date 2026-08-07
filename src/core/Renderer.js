import * as THREE from "three"

export default class Renderer extends THREE.WebGLRenderer{

    constructor(){

        super({

            antialias:true,

            alpha:false

        })

        this.setSize(

            window.innerWidth,

            window.innerHeight

        )

        this.setPixelRatio(

            Math.min(

                window.devicePixelRatio,

                2

            )

        )

        this.shadowMap.enabled = true

        this.shadowMap.type = THREE.PCFSoftShadowMap

        this.outputColorSpace = THREE.SRGBColorSpace

        this.toneMapping = THREE.ACESFilmicToneMapping

        this.toneMappingExposure = 1.15

    }

}