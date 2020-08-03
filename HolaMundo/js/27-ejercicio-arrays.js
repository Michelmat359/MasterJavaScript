'use strict'

/** 1. Un programa que pida seis numeros por pantalla y los meta en un array
 * 2. Mostar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
 * 3. Ordenarlo y mostralo
 * 4. Invertir su orden y mostarlo
 * 5- Mostarr cuantos elementos tiene el array
 * 6. Bisqueda de un valor introduciido por el usuario, que nos diga si lo encuentra y su indice
 */


function mostrarArray(elementos, TXTCUSTOM){
    document.write("<h1>Contenido del array"+TXTCUSTOM+"</h1>");
    document.write("<ul>");
    numeros.forEach((elementos, index) => {
        document.write("<li><strong>" + numero + "</strong></li>")
    })
    document.write("</ul>");
}


//Pedir 6 numeros
var numeros = new Array(6);

for (var i = 0; i < 5; i++) {
    //numeros[i] = parseInt(prompt("Introduce un numero", 0));
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

//Nistar en el cuerpo de la pagina
mostrarArray(numeros);

// Mostrar array en la consola
console.log(numeros)

// Ordenar y mostrar
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, 'ordenados');

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

// Contar elementos
document.write(numeros.length);

// Busqueda
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != 1){
document.write("<h1>ENCONTRADO</h1>");
document.write("<h1>Posicion de la busqueda: "+ posicion + "</h1>");
}else{
    document.write("<h1>NO ENCONTRADO</h1>"); 
}