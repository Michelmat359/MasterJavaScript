'use strict'

// Arrays, Arreglos, Matrices
// Coleccion de datos que puede tener una variable

var nombre = "Miguel Angel";
var nombres = ["Miguel Angel", "Michel", "Michelmat359"];
var precios = [20,30,40,50,60,12];

var lenguajes = new Array("PHP", "JS", "JAVA");

console.log(nombres[0]);
console.log(nombres.length);
var elemento = parseInt(prompt("Que elemento del array quieres", 0));
if(elemento >= nombres.length || isNaN(elemento)){
    alert("Numero incorrecto, prueba entre 0 y "+ nombres.length);
}else{
    alert("El nombre del usuario seleccionado es: "+nombres[elemento]);
}


document.write("<h1> Lenguajes de programacion del 2018 </h1>")
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");
document.write("**********************");


//Otra forma
document.write("<ul>");
lenguajes.forEach((elemento, index, data)=> {
    document.write("<li>" + index + ' - ' + elemento + "</li>");
})
document.write("</ul>");
document.write("**********************");


//Otra forma
document.write("<ul>");
for (let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");
document.write("**********************");


//Buscar en el array
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
var busquedaIndex = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
console.log(busqueda);
console.log(busquedaIndex);
// Mayores o iguales que X
var busquedaSome = precios.some(precio => precio >= 10)
console.log(busquedaSome);
