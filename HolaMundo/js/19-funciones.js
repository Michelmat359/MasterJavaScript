'use strict'

// Funciones
// Una función es una agrupacion reutilizable de un conjunto de instrucciones.

function calculadora() {
    return "Hola soy la calculadora";
}
console.log(calculadora);


function calculadora2() {
    console.log("Soy la otra calculadora");
}
calculadora2();


function porconsola(num1,num2){
    console.log("Suma: " + (num1 + num2));
    console.log("Resta: " + (num1 - num2));
    console.log("Multiplicacion: " + (num1 * num2));
    console.log("division: " + (num1 / num2));
    console.log("********************************");
}

function porPantalla(num1,num2){
    documento.write("Suma: " + (num1 + num2) + "<br/>");
    documento.write("Resta: " + (num1 - num2) + "<br/>");
    documento.write("Multiplicacion: " + (num1 * num2) + "<br/>");
    documento.write("division: " + (num1 / num2) + "<br/>");
    document.write("*********************************");
}


function calculadora3(num1, num2, mostrar = false) {
    if (mostrar == false) {
        porconsola(num1,num2);
    } else {
        porPantalla(num1,num2);
    }
}
calculadora3(2, 3);

for (var i = 0; i <= 3; i++) {
    console.log(i);
    calculadora3(i, 8);
}


// Parametros opcionales
calculadora3(1, 4,true);