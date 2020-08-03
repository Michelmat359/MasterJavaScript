'use strict'

var texto = "Hola mundo, soy una variable global";
var numero = 10;

function holamundo(texto){
    var hola_mundo = "texto_dentro";
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}
// Esto no funcionara por que la variable no es global. 
console.log(hola_mundo);

holamundo(texto);
