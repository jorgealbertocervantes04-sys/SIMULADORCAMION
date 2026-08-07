import * as THREE from "three";

export default class Hotspot{

    constructor(position,color=0xff7a00){

        this.group=new THREE.Group();

        this.position=position.clone();

        this.color=color;

        this.createCore();

        this.createRing();

        this.group.position.copy(this.position);

    }
    createCore(){

    const geometry=

    new THREE.SphereGeometry(

        0.06,

        32,

        32

    );

    const material=

    new THREE.MeshBasicMaterial({

        color:this.color

    });

    this.core=

    new THREE.Mesh(

        geometry,

        material

    );

    this.group.add(

        this.core

    );

}
createRing(){

    const geometry=

    new THREE.RingGeometry(

        0.09,

        0.13,

        32

    );

    const material=

    new THREE.MeshBasicMaterial({

        color:this.color,

        side:THREE.DoubleSide,

        transparent:true,

        opacity:.8

    });

    this.ring=

    new THREE.Mesh(

        geometry,

        material

    );

    this.group.add(

        this.ring

    );

}
update(camera,time){

    this.ring.lookAt(

        camera.position

    );

    const pulse=

    1+

    Math.sin(time*4)*.2;

    this.ring.scale.setScalar(

        pulse

    );

    this.core.scale.setScalar(

        pulse*.95

    );

}
setVisible(value){

this.group.visible=value;

}

}