var dato="hola Soy un dato";
let mensaje="Hola Soy un mensaje";

if(true){
  var dato="Dentro del Scoop";
  let mensaje="Dentro del Scoopp";
}

console.log(dato);
console.log(mensaje);


///////////////////////////////////////////////////////////////

const alumno={
    nombre:"harol"
};
console.log(alumno.nombre);

alumno.nombre="Eddie";

console.log(alumno.nombre);

//////////////////////////////////////////////////////////////////
//tipos de datos

let nom:string ="jean";
let numero:number=123.00;
let booleano:boolean=true;
let hoy:Date=new Date();

hoy=new Date('2017-10-26');

console.error(hoy);

let cualquiera:any;
cualquiera=nom;
console.error(cualquiera);

cualquiera=numero;
console.error(cualquiera);

cualquiera=booleano;
console.error(cualquiera);

cualquiera=hoy;
console.error(cualquiera);

let person={
    nombre:"jean",
    edad:27
};

person.nombre = "materia";

person= {
    nombre:"materia",
    edad:19
};

console.log(person);

/////////////////////////////
//plantillas literales

let nombre:string = "Bubu";
let apellido:string = "Torres";
let edad:number = 22;

//let textofinal = "Hola: "+nombre + " " + apellido + " (" + edad + ")";
let textofinal =`Hola: ${nombre} 
                                            ${apellido} 
(${edad})`;
console.log(textofinal);

let texto1:string=`${1+1}`;
console.log(texto1);

function droga(persona:string,droga?:string, actividad:string ="inyectando"){
    let mensaje:string;
    if(droga)
    mensaje=`${persona} está ${actividad} ${droga}`;
    else
    mensaje=`${persona} está ${actividad} no se sabe la droga`;
    console.log(mensaje);
}

droga("shaggy","poppers","fumando");

