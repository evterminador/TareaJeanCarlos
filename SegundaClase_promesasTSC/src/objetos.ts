interface DesPro{
nombre:string,
lvl:string,
age:number
};


let programador:DesPro={
    nombre:"Jean",
    lvl:"Dios",
    age:27
};

let {lvl,age,nombre}=programador;

console.log(`Mi nombre es: ${nombre}, mi lvl de programacion es ${lvl}`);


console.log("Mi nombre es: "+programador.nombre+", mi lvl de programacion es "+programador.lvl );
console.log(programador);

let namee:string=programador.nombre;
let niveel:string=programador.lvl;
let edaad:number=programador.age;

console.log("Mi nombre es: "+namee+", mi lvl de programacion es "+lvl );



let animales:string[]=["Harol","Eddie","Lotera"];

let [narizon,pulpin,bengay]=animales;

console.log(narizon,bengay,pulpin);

function programando(programador:DesPro){
console.log("Desarrollador: "+programador.nombre);
};

function finprogramando(programador:DesPro){
    console.log("Desarrollador: "+programador.nombre+" termino el programa");
    };

programando(programador);
finprogramando(programador);

