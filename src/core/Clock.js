export default class Clock{

    constructor(){

        this.delta = 0

        this.elapsed = 0

        this.previous = performance.now()

    }

    update(){

        const now = performance.now()

        this.delta =

        (now-this.previous)/1000

        this.elapsed += this.delta

        this.previous = now

    }

}