'use strict'

/* Tabla multiplicar de un numero introducido por pantalla*/

var numero = parseInt(prompt("¿De que numero quieres la tabla?", º));

while (isNaN(numero)) {
    alert("Has introducido una letra o caracter incorrecto. Vuelve a intentarlo. ")
    numero = parseInt(prompt("Introduce un numero", 0));
}
document.write("<h1>La tabla de multiplciar del: " + numero + "</h1>")

for (var i = 0; i <= 10; i++) {
    document.write(i + " x " + numero + " = " + (i * numero) + "<br/>");

}

// Todas las tablas de multiplicar
for (var c = 0; c <= 10; c++) {
    document.write("<h1>La tabla de multiplciar del: " + c + "</h1>")
    for (var i = 0; i <= 10; i++) {
        document.write(i + " x " + c + " = " + (i * c) + "<br/>");

    }
}