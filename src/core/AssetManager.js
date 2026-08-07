import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

export default class AssetManager{

    constructor(renderer){

        this.renderer=renderer;

        this.assets={};

        this.loadingManager=this.createLoadingManager();

        this.textureLoader=new THREE.TextureLoader(this.loadingManager);

        this.gltfLoader=new GLTFLoader(this.loadingManager);

        this.dracoLoader=new DRACOLoader(this.loadingManager);

        this.rgbeLoader=new RGBELoader(this.loadingManager);

        this.dracoLoader.setDecoderPath(

            "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"

        );

        this.gltfLoader.setDRACOLoader(

            this.dracoLoader

        );

    }
    createLoadingManager(){

    return new THREE.LoadingManager(

        ()=>{

            console.log("Todos los recursos cargados");

        },

        (url,loaded,total)=>{

            const percent=

            Math.floor(

                loaded/total*100

            );

            console.log(

                percent+" %"

            );

        },

        (url)=>{

            console.error(

                "No se pudo cargar:",

                url

            );

        }

    );

}
loadHDR(path){

    return new Promise(resolve=>{

        this.rgbeLoader.load(

            path,

            texture=>{

                texture.mapping=

                THREE.EquirectangularReflectionMapping;

                resolve(texture);

            }

        );

    });

}
loadGLB(path){

    return new Promise(resolve=>{

        this.gltfLoader.load(

            path,

            gltf=>{

                resolve(gltf.scene);

            }

        );

    });

}
loadTexture(path){

    return new Promise(resolve=>{

        this.textureLoader.load(

            path,

            texture=>{

                texture.colorSpace=

                THREE.SRGBColorSpace;

                resolve(texture);

            }

        );

    });

}

}