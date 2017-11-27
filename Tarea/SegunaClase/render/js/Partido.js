"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Equipo = /** @class */ (function () {
    function Equipo(nombre, numJugadores, entrenador) {
        this.nombre = nombre;
        this.numJugadores = numJugadores;
        this.entrenador = entrenador;
        this.golesP = 0;
    }
    return Equipo;
}());
exports.Equipo = Equipo;
var Jugador = /** @class */ (function () {
    function Jugador(nombre, equipo, goles) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.goles = goles;
        this.sanciones = 0;
    }
    Jugador.prototype.heroe = function () {
        return this.nombre + " es el heroe del partido.";
    };
    Jugador.prototype.faltoso = function () {
        return this.nombre + " no juega en el siguiente partido.";
    };
    return Jugador;
}());
exports.Jugador = Jugador;
var Partido = /** @class */ (function () {
    function Partido(equipo1, equipo2, jugadores, lugar, tipo) {
        this.tJuego = 90;
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.jugadores = jugadores;
        this.lugar = lugar;
        this.tipo = tipo;
        this.tiempo = 0;
    }
    Partido.prototype.iniciar = function () {
        this.imprimir("El partido en " + this.lugar + " est\u00E1 por comenzar se enfreta \n        '" + this.equipo1.nombre + " vs " + this.equipo2.nombre + "' en un " + this.tipo + ".");
        this.juego(this.tiempo);
    };
    Partido.prototype.juego = function (tiempo) {
        var that = this;
        var jugA = that.jugadores[aleatoria(0, that.jugadores.length)];
        var partido = new Promise(function (resolve, reject) {
            var proG = aleatoria(0, 70);
            var proF = aleatoria(0, 60);
            setTimeout(function () {
                if (proF == 15 || proF == 25 || proF == 35) {
                    var mFalta = that.sancion(jugA);
                    reject(mFalta);
                }
                resolve(proG);
            }, 1000);
        }).then(function (res) {
            that.imprimir("Min: " + that.tiempo);
            if (res == 18 || res == 38 || res == 58) {
                that.gol(jugA);
            }
            that.resumen(tiempo);
        }, function (err) {
            that.imprimir(err);
            that.resumen(tiempo);
        });
    };
    Partido.prototype.resumen = function (tiempo) {
        if (tiempo >= this.tJuego) {
            if (this.equipo1.golesP == this.equipo2.golesP) {
                if (tiempo >= 96) {
                    this.imprimir("Se pasa a penales");
                }
                else {
                    this.tJuego += 3;
                    this.imprimir("Se le da 3 minutos adicionales");
                    this.juego(this.tiempo);
                }
            }
            else {
                this.fin();
            }
        }
        else {
            this.tiempo++;
            this.juego(this.tiempo);
        }
    };
    Partido.prototype.fin = function () {
        var message;
        if (this.equipo1.golesP == this.equipo2.golesP) {
            message = '  Empate   ';
        }
        else if (this.equipo1.golesP < this.equipo2.golesP) {
            message = this.equipo2.nombre + " Gana!!!!!";
        }
        else {
            message = this.equipo1.nombre + " Gana!!!!!";
        }
        this.imprimir(message + "\n  " + this.equipo1.golesP + " : " + this.equipo2.golesP);
    };
    Partido.prototype.sancion = function (jugador) {
        var pos = this.jugadores.indexOf(jugador);
        var numS = jugador.sanciones;
        this.jugadores[pos].sanciones = numS + 1;
        if (numS < 4) {
            return 'Tarjeta amarilla para ' + jugador.nombre + ' x' + jugador.sanciones;
        }
        else {
            return jugador.faltoso();
        }
    };
    Partido.prototype.gol = function (jugador) {
        var pos = this.jugadores.indexOf(jugador);
        this.jugadores[pos].goles++;
        if (jugador.equipo.nombre == this.equipo1.nombre) {
            this.equipo1.golesP = this.equipo1.golesP + 1;
            this.imprimir('Gol de ' + jugador.nombre + "\n" +
                this.equipo1.golesP + " : " + this.equipo2.golesP);
        }
        else {
            this.equipo2.golesP = this.equipo2.golesP + 1;
            this.imprimir('Gol de ' + jugador.nombre + "\n" +
                this.equipo1.golesP + " : " + this.equipo2.golesP);
        }
    };
    Partido.prototype.imprimir = function (x) {
        console.log(x);
    };
    return Partido;
}());
exports.Partido = Partido;
function aleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
