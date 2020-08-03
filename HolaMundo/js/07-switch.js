'use strict'

//Switch

var edad = 18;
var imprime;

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 40:
        imprime = "Crisis de los 40";
    break;
    case 25:
        imprime = "Ya eres adulto";
    break;
    default:
        imprime = "Todo es neutro";
}
console.log(imprime);