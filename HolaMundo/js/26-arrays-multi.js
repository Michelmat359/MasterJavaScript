'use strict'

// Array multidimensional
var cateogiras = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [cateogiras, peliculas];

console.log(cine);
console.log(cine[0][1]);

/*var elemento = prompt("Intreoduce la pelicula");
peliculas.push(elemento);
console.log(peliculas);*/


var elemento = "";
do{
    var elemento = prompt("Intreoduce la pelicula");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

//Con este eliminamos el ultimo, que es "ACABAR"
peliculas.pop();

// Convertir array a cadena de texto
var peliculasstring = peliculas.join();
console.log(peliculasstring);

// Convertir cadena de texto a array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);

//ORDENAR
var ordenar = peliculas.sort();
var ordenar_inverso = peliculas.reverse();
console.log(ordenar);
console.log(ordenar_inverso);

