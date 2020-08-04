'use strict'

// DOM -- Document Object Mode
function cambiarColor(color) {
    caja.style.color = color;
}
// CONSEGUIR ELEMENTOS CON UN ID CONCRETO

var caja = document.getElementById("micaja").innerHTML;
caja.innerHTML = "Texto en la caja desde el JS";
caja.style.background = "red";
caja.style.padding = "20px";
console.log(caja);


// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);
console.log(todosLosDivs[2].textContent);
var contenidosegundodiv = todosLosDivs[2];
contenidosegundodiv = "Texto segundo DIV de la lista";
console.log(contenidosegundodiv);


for (var valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo);
    }

}

var divamarillo = document.getElementsByClassName("amarillos");
divamarillo[0].style.background="yellow";
console.log(divamarillo);


var divrojos = document.getElementsByClassName("rojos");
for (var div in divrojos) {
    if (divrojos[div].className = "rojo") {
        divrojos[div].style.background = "red";
    }
}
console.log(divrojos);


//Query Selector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);



