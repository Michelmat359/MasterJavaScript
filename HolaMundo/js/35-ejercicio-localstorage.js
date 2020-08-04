'use strict'

var formulario = document.querySelector("#formpeliculas");
console.log(formulario);
formulario.addEventListener('submit', function () {
    var titulo = document.querySelector('#addpelicula').value;
    console.log(titulo);
    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo)
    }
})
var ul = document.querySelector('#peliculaslist');
for (var i in localStorage) {
    if (typeof localStorage[i] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formulariob = document.querySelector("#formBorrarPeliculas");

formulariob.addEventListener('submit', function () {
    var titulo = document.querySelector('#borrarpelicula').value;
    console.log(titulo);
    if (titulo.length >= 1) {
        localStorage.removeItem(titulo);
    }
})