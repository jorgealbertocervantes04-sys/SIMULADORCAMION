import * as THREE from "three";

export default class RaycasterManager{

    constructor(camera,scene,domElement){

        this.camera=camera;

        this.scene=scene;

        this.domElement=domElement;

        this.raycaster=new THREE.Raycaster();

        this.mouse=new THREE.Vector2();

        this.selected=null;

    }
    initialize(callback){

    this.callback=callback;

    this.domElement.addEventListener(

        "pointerdown",

        this.onPointerDown

    );

}
onPointerDown=(event)=>{

    const rect=

    this.domElement.getBoundingClientRect();

    this.mouse.x=

    ((event.clientX-rect.left)/rect.width)*2-1;

    this.mouse.y=

    -((event.clientY-rect.top)/rect.height)*2+1;

    this.raycaster.setFromCamera(

        this.mouse,

        this.camera

    );

    const objects=[];

    this.scene.traverse(child=>{

        if(child.isMesh){

            objects.push(child);

        }

    });

    const intersects=

    this.raycaster.intersectObjects(

        objects,

        true

    );

    if(intersects.length){

        this.selected=

        intersects[0].object;

        if(this.callback){

            this.callback(

                this.selected,

                intersects[0]

            );

        }

    }

}
dispose(){

    this.domElement.removeEventListener(

        "pointerdown",

        this.onPointerDown

    );

}

}