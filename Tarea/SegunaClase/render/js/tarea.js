"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chevrolet = {
    matricula: 'C27A6',
    marca: 'chevrolet',
    anio: 2017
};
function imprimir(auto) {
    var matricula = auto.matricula, marca = auto.marca, anio = auto.anio;
    var date = new Date();
    var estado;
    if (date.getFullYear() == anio) {
        estado = 'Carro del año :D';
    }
    else {
        estado = 'Del año ' + anio;
    }
    console.log("La marca del auto es: " + marca + ".\n    Con matricula: " + matricula + ".\n    Estado: " + estado);
}
imprimir(chevrolet);
/*2.- Crear un array de 15 datos (string) y crear un metodo que imprima de
manera aleatoria cualquier dato del array.*/
var letra = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
function word(cant) {
    var word = "";
    var tam = letra.length;
    for (var i = 0; i < cant; i++) {
        var lAle = aleatoria(0, tam);
        word += letra.charAt(lAle);
    }
    return word;
}
function aleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Creando un array de 15 elementos
var wordsAleatorio = llenarArray(15);
console.log("Datos del array\n");
console.log(wordsAleatorio);
console.log("\n---------------------------------------------");
function imprirmirRandow(listA) {
    for (var i = 0; i < listA.length; i++) {
        console.log(listA[aleatoria(0, listA.length - 1)]);
    }
}
imprirmirRandow(wordsAleatorio);
console.log("--------------------------------------------------------------");
/*3.- crear un array de 6 datos (string) y compararar el dato seleccionado de
manera aleatoria con un if-else dentro de una promesa, si sale un reject la
promesa se debe volver a ejecutar con un contador que cuente las veces que se
ejecuto para llegar al resultado esperado, si es el resultado esperado imprime
en pantalla el mensaje de listo y el numero de veces que se demoro en encontrar el resultado.
*/
//let arrayData:Array<String> = ['Goku', 'Jiren', 'Vegeta', 'Caulifla', 'Kale', 'Goku'];
var arrayData = llenarArray(6);
var c = 0;
function loop() {
    var promesa = new Promise(function (resolve, reject) {
        var v1 = arrayData[aleatoria(0, arrayData.length - 1)].toString();
        var v2 = arrayData[aleatoria(0, arrayData.length - 1)].toString();
        setTimeout(function () {
            if (v1 === v2) {
                resolve("El valor '" + v1 + "' se demoro " + c + " veces.");
            }
            else {
                reject(c++);
            }
        }, 1000);
    }).then(function (res) {
        console.log(res);
    }).catch(function (err) {
        console.log(c);
        if (c === 6) {
            console.log("Se hizo todo lo posible");
        }
        else {
            loop();
        }
    });
}
;
loop();
/*Reutilizables*/
function llenarArray(cant) {
    var array = new Array;
    for (var i = 0; i < cant; i++) {
        array[i] = i + ". " + word(aleatoria(1, cant));
    }
    return array;
}
/*4.- Crear un partido con jugadores y clases importadas de otros archivos.*/
var Partido_1 = require("./Partido");
var e1 = new Partido_1.Equipo('Real Madrid', 10, 'Zinedine Zidane');
var e2 = new Partido_1.Equipo('Barcelona', 10, 'Ernesto Valverde');
var jugadores = [
    new Partido_1.Jugador('Ter Stegen', e2, 6),
    new Partido_1.Jugador('Pique', e2, 60),
    new Partido_1.Jugador('Nèlson Semedo', e2, 82),
    new Partido_1.Jugador('I. Rakitic', e2, 80),
    new Partido_1.Jugador('Sergio Busquets', e2, 64),
    new Partido_1.Jugador('Danis Suares', e2, 200),
    new Partido_1.Jugador('Arda', e2, 345),
    new Partido_1.Jugador('A. Iniesta', e2, 180),
    new Partido_1.Jugador('Luis Suares', e2, 100),
    new Partido_1.Jugador('Messi', e2, 584),
    new Partido_1.Jugador('Keylor Navas', e1, 60),
    new Partido_1.Jugador('K. Castilla', e1, 60),
    new Partido_1.Jugador('Luca', e1, 30),
    new Partido_1.Jugador('Carvajal', e1, 450),
    new Partido_1.Jugador('Vallejo', e1, 160),
    new Partido_1.Jugador('Segio Ramos', e1, 360),
    new Partido_1.Jugador('Varane', e1, 67),
    new Partido_1.Jugador('Nacho', e1, 322),
    new Partido_1.Jugador('Marcelo', e1, 328),
    new Partido_1.Jugador('Ronaldo', e1, 618)
];
var juego = new Partido_1.Partido(e1, e2, jugadores, 'francia', 'amistoso');
var after1 = setTimeout(function () {
    console.log("---------------------------------------------------------------");
    juego.iniciar();
    clearTimeout(after1);
}, 7000);
