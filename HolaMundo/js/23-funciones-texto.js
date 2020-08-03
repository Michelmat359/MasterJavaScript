'use strict'

// transformacion de textos
var numero = 333;
var texto1 = "Bienvenido a mi curso de Miguel Angel Mateo";
var texto2 = "Esto mola"

var dato = numero.toString();
console.log(typeof dato);

var dato2 = texto1.toUpperCase();
var dato2_2 = dato2.toLowerCase();
console.log(dato2);
console.log(dato2_2);


var nombre = "Miguel Angel";
var nombre2 = ["uno", "dos"];
console.log(nombre.length);
console.log(nombre2.length);


var textoTotal = texto1 + texto2;
var textoTotal2 = texto1.concat(" "+texto2);
console.log(textoTotal);
console.log(textoTotal2);

//Encontrar primera coincidencia
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

//Encontrar ultima coincidencia
var busqueda2 = texto1.lastindexOf("curso");
console.log(busqueda2);

//Busqueda
var busqueda3 = texto1.search("curso");
console.log(busqueda3);

//Busqueda y devuelve una coleccion con las coincidencias
var busqueda4 = texto1.match(/curso/g);
console.log(busqueda4);

//Busqueda posicionada
var busqueda5 = texto1.substr(14,5);
console.log(busqueda5);

//Busqueda posicion la letra
var busqueda6 = texto1.charAt(44);
console.log(busqueda6);

//true o false si empieza en 
var busqueda7 = texto1.startsWith("Bienvenido");
console.log(busqueda7);

//true o false si existe la palabra
var busqueda8 = texto1.includes("curso");
console.log(busqueda8);

//Encontrar y sustituir
var busqueda9 = texto1.replace("Miguel Angel", "Michel");
console.log(busqueda9);

// Separa el string a partir del caracter que quiera
var busqueda10 = texto1.slice(14);
console.log(busqueda10);

// cortar por el patron pasado y meter en array
var busqueda11 = texto1.splice(" ");
console.log(busqueda111);

//Quitar los espacios
var busqueda9 = texto1.trim();
console.log(busqueda9);





