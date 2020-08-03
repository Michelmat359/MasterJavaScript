'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre

var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}

function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var suma = num1 + num2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return suma;
}

//console.log(sumame(3,4));

sumame(5,7,function(dato){
    console.log("La suma es: " + dato);
}, function(dato){
    console.log("La suma por dos es: ", (dato*2))
})

// Funcion de flecha

sumame(5,7,dato => {
    console.log("La suma es: " + dato);
}, dato =>{
    console.log("La suma por dos es: ", (dato*2))
})

