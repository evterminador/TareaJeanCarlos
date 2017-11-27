"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Equipo = /** @class */ (function () {
    function Equipo(nombre, numJugadores, entrenador) {
        this.nombre = nombre;
        this.numJugadores = numJugadores;
        this.entrenador = entrenador;
    }
    return Equipo;
}());
exports.Equipo = Equipo;
var Jugador = /** @class */ (function () {
    function Jugador(nombre, equipo, goles) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.goles = goles;
    }
    Jugador.prototype.heroe = function () {
        console.log(this.nombre + " es el heroe del partido.");
    };
    Jugador.prototype.borracho = function () {
        console.log(this.nombre + " no juega es un pobre borracho.");
    };
    return Jugador;
}());
exports.Jugador = Jugador;
var Partido = /** @class */ (function () {
    function Partido(equipo1, equipo2, lugar, tipo) {
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.lugar = lugar;
        this.tipo = tipo;
    }
    Partido.prototype.inicio = function () {
        console.log("El partido est\u00E1 por empezar");
    };
    return Partido;
}());
exports.Partido = Partido;
