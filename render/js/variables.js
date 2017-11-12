"use strict";
var dato = "hola Soy un dato";
var mensaje = "Hola Soy un mensaje";
if (true) {
    var dato = "Dentro del Scoop";
    var mensaje_1 = "Dentro del Scoopp";
}
console.log(dato);
console.log(mensaje);
///////////////////////////////////////////////////////////////
var alumno = {
    nombre: "harol"
};
console.log(alumno.nombre);
alumno.nombre = "Eddie";
console.log(alumno.nombre);
//////////////////////////////////////////////////////////////////
//tipos de datos
var nom = "jean";
var numero = 123.00;
var booleano = true;
var hoy = new Date();
hoy = new Date('2017-10-26');
console.error(hoy);
var cualquiera;
cualquiera = nom;
console.error(cualquiera);
cualquiera = numero;
console.error(cualquiera);
cualquiera = booleano;
console.error(cualquiera);
cualquiera = hoy;
console.error(cualquiera);
var person = {
    nombre: "jean",
    edad: 27
};
person.nombre = "materia";
person = {
    nombre: "materia",
    edad: 19
};
console.log(person);
/////////////////////////////
//plantillas literales
var nombre = "Bubu";
var apellido = "Torres";
var edad = 22;
//let textofinal = "Hola: "+nombre + " " + apellido + " (" + edad + ")";
var textofinal = "Hola: " + nombre + " \n                                            " + apellido + " \n(" + edad + ")";
console.log(textofinal);
var texto1 = "" + (1 + 1);
console.log(texto1);
function droga(persona, droga, actividad) {
    if (actividad === void 0) { actividad = "inyectando"; }
    var mensaje;
    if (droga)
        mensaje = persona + " est\u00E1 " + actividad + " " + droga;
    else
        mensaje = persona + " est\u00E1 " + actividad + " no se sabe la droga";
    console.log(mensaje);
}
droga("shaggy", "poppers", "fumando");
