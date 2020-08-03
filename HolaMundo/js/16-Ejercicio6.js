'use strict'

/* Que nos diga si un numero es par o impar*/

var numero = parseInt(prompt("Mete un numero", 0));

while (isNaN(numero)) {
    alert("Has introducido una letra o caracter incorrecto. Vuelve a intentarlo. ")
    numero = parseInt(prompt("Introduce un numero", 0));
}

if (number % 2 == 0) {
    alert("Es par");
} else {
    alert("Es impar");
}