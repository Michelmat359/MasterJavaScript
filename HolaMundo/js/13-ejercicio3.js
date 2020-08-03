'use strict'

/* Hacer un programa que muestre todos los numeros introducidos entre un usuario */

var num1 = parseInt(prompt("Introduce un numero", 0));
var num2 = parseInt(prompt("Introduce un segundo numero", 0));


while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    alert("Has introducido una letra o numero inferior a 0. Vuelve a intentarlo. ")
    num1 = parseInt(prompt("Introduce un numero", 0));
    num2 = parseInt(prompt("Introduce un segundo numero", 0));
}


if (num1 <= num2) {
    document.write("<h1> De " + num1 + " a " + num2 + " estan los números: </h1>")
    for (var i = num1; i < num2; i++) {
        document.write(i + "<br/>");
    }
}else if(num2 < num1){
    document.write("<h1> De " + num2 + " a " + num1 + " estan los números: </h1>")
    for (var i = num2; i < num1; i++) {
        document.write(i + "<br/>");
    }
}