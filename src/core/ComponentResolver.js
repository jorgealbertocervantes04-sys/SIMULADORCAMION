import Database from "../data/InspectionDatabase.js";

export default class ComponentResolver{

resolve(mesh){

const name=

mesh.name.toLowerCase();

if(name.includes("engine"))

return Database.motor;

if(name.includes("wheel"))

return Database.llanta;

if(name.includes("tire"))

return Database.llanta;

if(name.includes("fifth"))

return Database.quinta;

if(name.includes("trailer"))

return Database.remolque;

if(name.includes("brake"))

return Database.freno;

return{

title:mesh.name,

description:"No existe información registrada para este componente."

};

}

}