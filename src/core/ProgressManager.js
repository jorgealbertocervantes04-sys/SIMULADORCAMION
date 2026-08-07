export default class ProgressManager{

constructor(){

this.value=0;

}

set(value){

this.value=value;

}

get(){

return this.value;

}

increase(step=1){

this.value+=step;

}

reset(){

this.value=0;

}

}