export class Equipo {
    nombre:string;
    numJugadores:number;
    entrenador:string;
    golesP:number;

    constructor (nombre:string, numJugadores:number, entrenador:string) {
        this.nombre = nombre;
        this.numJugadores = numJugadores;
        this.entrenador = entrenador;
        this.golesP = 0;
    }
}

export class Jugador {
    nombre:string;
    equipo:Equipo;
    goles:number;
    sanciones:number;

    constructor(nombre:string, equipo:Equipo, goles:number){
        this.nombre=nombre;
        this.equipo=equipo;
        this.goles=goles;
        this.sanciones = 0;
    }

    public heroe(){
        return this.nombre+" es el heroe del partido.";
    }

    public faltoso(){
        return this.nombre +" no juega en el siguiente partido.";
    }
}

export class Partido {
    equipo1:Equipo;
    equipo2:Equipo;
    jugadores:Array<Jugador>;
    lugar:string;
    tipo:string;
    tiempo:number;

    tJuego:number = 90;

    constructor(equipo1:Equipo, equipo2:Equipo, jugadores:Array<Jugador>, lugar:string, tipo:string) {
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.jugadores = jugadores;
        this.lugar = lugar;
        this.tipo = tipo;
        this.tiempo = 0;
    }

    public iniciar() {
        this.imprimir(`El partido en ${this.lugar} está por comenzar se enfreta 
        '${this.equipo1.nombre} vs ${this.equipo2.nombre}' en un ${this.tipo}.`);
        this.juego(this.tiempo);
    }

    public juego(tiempo:number) {
        let that = this;
        let jugA:Jugador = that.jugadores[aleatoria(0, that.jugadores.length)];
        const partido = new Promise(function(resolve, reject) {
            let proG:number = aleatoria(0, 70);
            let proF:number = aleatoria(0, 60);
            setTimeout(() => {
                if(proF == 15 || proF == 25 || proF == 35) {
                    var mFalta:string = that.sancion(jugA);
                    reject(mFalta);
                }
                resolve(proG);
            }, 1000);
        }).then((res) => {
            that.imprimir(`Min: ${that.tiempo}`);
            if (res == 18 || res == 38 || res == 58) {
                that.gol(jugA);
            }
            that.resumen(tiempo);
        }, (err) => {
            that.imprimir(err);
            that.resumen(tiempo);
        });
    }

    public resumen(tiempo:number) {
        if (tiempo >= this.tJuego) {
            if (this.equipo1.golesP == this.equipo2.golesP) {
                if (tiempo >= 96) {
                    this.imprimir("Se pasa a penales");
                } else {
                    this.tJuego += 3;
                    this.imprimir("Se le da 3 minutos adicionales");
                    this.juego(this.tiempo)
                }
            } else {
                this.fin();
            }
        } else {
            this.tiempo++;
            this.juego(this.tiempo);
        }
    }

    public fin() {
        var message:string;
        if (this.equipo1.golesP == this.equipo2.golesP) {
            message = '  Empate   ';
        } else if (this.equipo1.golesP < this.equipo2.golesP){
            message = this.equipo2.nombre + " Gana!!!!!"
        } else {
            message = this.equipo1.nombre + " Gana!!!!!"
        }
        this.imprimir(message + "\n  " + this.equipo1.golesP + " : " + this.equipo2.golesP);
    }

    public sancion(jugador:Jugador) {
        let pos = this.jugadores.indexOf(jugador);
        let numS:number = jugador.sanciones;
        this.jugadores[pos].sanciones = numS + 1;
        if (numS < 4) {
            return 'Tarjeta amarilla para ' + jugador.nombre + ' x' + jugador.sanciones;
        } else {
            return jugador.faltoso();
        }
    }

    public gol(jugador:Jugador) {
        let pos:number = this.jugadores.indexOf(jugador);
        this.jugadores[pos].goles++;
        if (jugador.equipo.nombre == this.equipo1.nombre) {
            this.equipo1.golesP = this.equipo1.golesP + 1;
            this.imprimir('Gol de ' + jugador.nombre + "\n" +
            this.equipo1.golesP  + " : " + this.equipo2.golesP);
        } else {
            this.equipo2.golesP = this.equipo2.golesP + 1;
            this.imprimir('Gol de ' + jugador.nombre + "\n" +
            this.equipo1.golesP  + " : " + this.equipo2.golesP);
        }
    }

    public imprimir(x:string) {
        console.log(x);
    }
}

function aleatoria(min:number, max:number) {
    return Math.floor(Math.random()*(max-min+1)+min);
}