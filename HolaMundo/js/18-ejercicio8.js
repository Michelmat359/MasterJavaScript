'use strict'

/** Crear una calculadora */

var num1 = parseInt(prompt("Introduce un numero", 0));
var num2 = parseInt(prompt("Introduce un segundo numero", 0));


while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
    alert("Has introducido una letra o numero inferior a 0. Vuelve a intentarlo. ")
    num1 = parseInt(prompt("Introduce un numero", 0));
    num2 = parseInt(prompt("Introduce un segundo numero", 0));
}

var resultado = "La suma es: " + (num1 + num2) + " <br/>" +
    "La resta es: " + (num1 - num2) + " <br/>" +
    "La multiplicacion es: " + (num1 * num2) + " <br/>" +
    "La division es: " + (num1 / num2) + " <br/>";

var resultado2 = "La suma es: " + (num1 + num2) + " \n" +
    "La resta es: " + (num1 - num2) + " \n" +
    "La multiplicacion es: " + (num1 * num2) + " \n" +
    "La division es: " + (num1 / num2) + " \n";

document.write(resultado);
alert(resultado2);
console.log(resultado2);