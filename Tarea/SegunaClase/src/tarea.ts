/*1.- Crear un objeto y descomponerlo para que un metodo imprima sus datos.*/
interface car {
    matricula:string,
    marca:string,
    anio:number
}


let chevrolet: car ={
    matricula:'C27A6',
    marca: 'chevrolet',
    anio: 2017
};


function imprimir(auto:car) {
    let {matricula, marca, anio} =auto;

    let date = new Date();

    var estado:string;
    if (date.getFullYear() == anio) {
        estado = 'Carro del año :D';
    } else {
        estado = 'Del año ' + anio;
    }

    console.log(`La marca del auto es: ${marca}.
    Con matricula: ${matricula}.
    Estado: ${estado}`);
}

imprimir(chevrolet);

/*2.- Crear un array de 15 datos (string) y crear un metodo que imprima de 
manera aleatoria cualquier dato del array.*/

let letra = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

function word(cant:number) {
    var word:string = "";
    var tam = letra.length;
    for (let i=0; i < cant; i++) {
        var lAle = aleatoria(0, tam);
        word += letra.charAt(lAle);
    }
    return word;
}

function aleatoria(min:number, max:number) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Creando un array de 15 elementos
let wordsAleatorio:Array<String> = llenarArray(15);

console.log("Datos del array\n");
console.log(wordsAleatorio);
console.log("\n---------------------------------------------");

function imprirmirRandow(listA:Array<String>) {
    for (let i = 0; i < listA.length; i++) {
        console.log(listA[aleatoria(0, listA.length-1)]);
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
let arrayData:Array<String> = llenarArray(6);

var c = 0;
function loop () {
    const promesa = new Promise(function(resolve, reject) {
        let v1:string = arrayData[aleatoria(0, arrayData.length-1)].toString();
        let v2:string = arrayData[aleatoria(0, arrayData.length-1)].toString();
        
        setTimeout(() => {
            if (v1 === v2) {
                resolve(`El valor '${v1}' se demoro ${c} veces.`);
            } else {
                reject(c++);
            }
        }, 1000);
    }).then(function(res) {
        console.log(res);
    }).catch(function(err) {
        console.log(c);
        if (c === 6) {
            console.log("Se hizo todo lo posible");
        } else {
            loop();
        }
    });
};

loop();


/*Reutilizables*/
function llenarArray(cant:number) {
    var array:Array<String> = new Array;
    for (let i = 0; i < cant; i++){
        array[i] = i + ". "+ word(aleatoria(1, cant));
    }
    return array;
}


/*4.- Crear un partido con jugadores y clases importadas de otros archivos.*/
import { Partido, Jugador, Equipo } from "./Partido"

let e1:Equipo = new Equipo('Real Madrid', 10, 'Zinedine Zidane');
let e2:Equipo = new Equipo('Barcelona', 10, 'Ernesto Valverde');

let jugadores:Array<Jugador> = [ 
    new Jugador('Ter Stegen', e2, 6), 
    new Jugador('Pique', e2, 60),
    new Jugador('Nèlson Semedo', e2, 82),
    new Jugador('I. Rakitic', e2, 80),
    new Jugador('Sergio Busquets', e2, 64),
    new Jugador('Danis Suares', e2, 200),
    new Jugador('Arda', e2, 345),
    new Jugador('A. Iniesta', e2, 180),
    new Jugador('Luis Suares', e2, 100),
    new Jugador('Messi', e2, 584),
    new Jugador('Keylor Navas', e1, 60),
    new Jugador('K. Castilla', e1, 60),
    new Jugador('Luca', e1, 30),
    new Jugador('Carvajal', e1, 450),
    new Jugador('Vallejo', e1, 160),
    new Jugador('Segio Ramos', e1, 360),
    new Jugador('Varane', e1, 67),
    new Jugador('Nacho', e1, 322),
    new Jugador('Marcelo', e1, 328),
    new Jugador('Ronaldo', e1, 618)
];

let juego:Partido = new Partido(e1, e2, jugadores, 'francia', 'amistoso');

var after1 = setTimeout(() => {
    console.log("---------------------------------------------------------------");
    juego.iniciar();
    clearTimeout(after1);
}, 7000);