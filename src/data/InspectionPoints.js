const InspectionPoints=[

{
id:"engine_oil",

name:"Aceite del Motor",

component:"motor",

position:[-2.8,2.1,0.6],

stage:1,

critical:true,

description:

"Verifique el nivel de aceite mediante la bayoneta."

},

{
    id:"coolant",

name:"Refrigerante",

component:"motor",

position:[-2.9,2.6,-0.5],

stage:1,

critical:true,

description:

"Revise el depósito de expansión y posibles fugas."

},

{
    id:"air_filter",

name:"Filtro de Aire",

component:"motor",

position:[-2.2,2.4,1.0],

stage:1,

critical:false,

description:

"Compruebe que no exista saturación ni daños."

},

{
    id:"left_front_tire",

name:"Llanta Delantera Izquierda",

component:"llanta",

position:[-1.3,.8,1.3],

stage:2,

critical:true,

description:

"Revise presión, desgaste y birlos."

},

{
    id:"right_front_tire",

name:"Llanta Delantera Derecha",

component:"llanta",

position:[-1.3,.8,-1.3],

stage:2,

critical:true,

description:

"Inspeccione presión y estado general."

}

];

export default InspectionPoints;