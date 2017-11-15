"use strict";
/*
1.- Subir todo tu codigo a un repositorio de git. ver comandos de github.
2.- Crear un metodo que tenga 4 parametros el primero un boolean
y los otros 3 que sean numeros (si el bolean es true suma, si es false multiplica)
se debe ver si el cuarto valos es ingresado o no si no es ingresado y el booleano
es tru ya no suma ahora hace potencia del segundo numero elebado al tercer numero
si es false manda un string diciendo ingrese el ultimo parametro.
3.- Crear un metodo que reciba un List de puros string y que sea recorrido por un for enumerando
1 por uno en consola minimo 10 elementos.
4.- enviar el link del repositorio a jean carlo para que lo pueda ver.
5.- Comprar microfono.
*/
var estado = false;
var num1 = 4;
var num2 = 2;
function ejercicio1(estado, num1, num2, num3) {
    var valor = 0;
    if (num3) {
        if (estado == true) {
            valor = num1 + num2;
        }
        else {
            valor = num1 * num2;
        }
    }
    else {
        if (estado == true) {
            valor = Math.pow(num1, num2);
        }
        else {
            console.log("Ingresar el 4 valor");
            return;
        }
    }
    console.log("El valor es: " + valor);
}
;
ejercicio1(estado, num1, num2);
console.log("-----------------------------------------------------");
var lista = ['Jean', 'Harol', 'Eddie',
    'Cuatro Brazos', 'Kevin',
    'Casia', 'Pasos', 'Cuya',
    'Noe', 'Arca de Noe',
    'Mr. Bubu'];
function ejercicio2(lista) {
    for (var i = 0; i < lista.length; i++)
        console.log(i + ": " + lista[i]);
}
ejercicio2(lista);
