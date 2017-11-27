"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jugador = /** @class */ (function () {
    function jugador(nombre, equipo, goles) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.goles = goles;
    }
    jugador.prototype.heroe = function () {
        console.log(this.nombre + " es el heroe del partido.");
    };
    jugador.prototype.borracho = function () {
        console.log(this.nombre + " no juega es un pobre borracho.");
    };
    return jugador;
}());
exports.jugador = jugador;
