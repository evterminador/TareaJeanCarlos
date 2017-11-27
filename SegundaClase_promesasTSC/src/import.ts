import { jugador } from "./clases"

let cabraldo=new jugador("Cabraldo","Real Mierda",-20);

console.log(cabraldo);
cabraldo.borracho();

console.log(`
-----------------------------------------------------------------------------
`);

let messi=new jugador("Messi","Barcelona",190);
console.log(messi);
messi.heroe();