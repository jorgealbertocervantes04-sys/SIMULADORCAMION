import * as THREE from "three"

export default class Scene extends THREE.Scene{

    constructor(){

        super()

        this.background = new THREE.Color(0x101318)

        this.fog = new THREE.Fog(

            0x101318,

            25,

            90

        )

    }

}