export class jugador{
    nombre:string;
    equipo:string;
    goles:number;

    constructor(nombre:string,equipo:string,goles:number){
        this.nombre=nombre;
        this.equipo=equipo;
        this.goles=goles;
    }

    public heroe(){
        console.log(this.nombre+" es el heroe del partido.");
    }

    public borracho(){
        console.log(this.nombre+" no juega es un pobre borracho.");
    }

}

/*
    1.- Crear un objeto y descomponerlo para que un metodo imprima sus datos.
    2.- Crear un array de 15 datos (string) y crear un metodo que imprima de manera aleatoria cualquier dato del array.
    3.- crear un array de 6 datos (string) y compararar el dato seleccionado de manera aleatoria con un if-else dentro de una promesa, si sale un reject la promesa se debe volver a ejecutar
        con un contador que cuente las veces que se ejecuto para llegar al resultado esperado, si es el resultado esperado imprime en pantalla el mensaje de listo y el numero de veces que se demoro en encontrar el resultado.
    4.- Crear un partido con jugadores y clases importadas de otros archivos.
*/
