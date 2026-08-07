import InspectionPoints

from "../data/InspectionPoints.js";

export default class StageManager{

constructor(){

this.points=

InspectionPoints;

}

getStage(stage){

return this.points.filter(

p=>p.stage===stage

);

}

getStages(){

return [...new Set(

this.points.map(

p=>p.stage

)

)];

}

}