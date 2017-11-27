"use strict";
;
var programador = {
    nombre: "Jean",
    lvl: "Dios",
    age: 27
};
var lvl = programador.lvl, age = programador.age, nombre = programador.nombre;
console.log("Mi nombre es: " + nombre + ", mi lvl de programacion es " + lvl);
console.log("Mi nombre es: " + programador.nombre + ", mi lvl de programacion es " + programador.lvl);
console.log(programador);
var namee = programador.nombre;
var niveel = programador.lvl;
var edaad = programador.age;
console.log("Mi nombre es: " + namee + ", mi lvl de programacion es " + lvl);
var animales = ["Harol", "Eddie", "Lotera"];
var narizon = animales[0], pulpin = animales[1], bengay = animales[2];
console.log(narizon, bengay, pulpin);
function programando(programador) {
    console.log("Desarrollador: " + programador.nombre);
}
;
function finprogramando(programador) {
    console.log("Desarrollador: " + programador.nombre + " termino el programa");
}
;
programando(programador);
finprogramando(programador);
