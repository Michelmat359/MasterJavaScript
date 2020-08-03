'use strict'

/* Muestre todos los numeros divisores introducides en prompt */

var numero = parseInt(prompt("Mete un numero", 0));

for(var i = 0; i < numero; i++){
    if(numero%i == 0){
        console.log("Divisores: "+ i);
    }
}