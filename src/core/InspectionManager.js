import InspectionPoints

from "../data/InspectionPoints.js";

export default class InspectionManager{

constructor(){

this.points=

InspectionPoints;

this.completed=

new Set();

this.current=null;

}
getAll(){

return this.points;

}

getCurrent(){

return this.current;

}

select(id){

this.current=

this.points.find(

p=>p.id===id

);

return this.current;

}
complete(id){

this.completed.add(id);

}

isCompleted(id){

return this.completed.has(id);

}
complete(id){

this.completed.add(id);

}

isCompleted(id){

return this.completed.has(id);

}
progress(){

return{

completed:

this.completed.size,

total:

this.points.length,

percent:

Math.round(

this.completed.size/

this.points.length*100

)

};

}
reset(){

this.completed.clear();

this.current=null;

}

}