import SceneManager from "/core/SceneManager.js"

export default class App{

    constructor(){

        this.sceneManager = new SceneManager()

    }

    start(){

        this.sceneManager.start()

    }

}