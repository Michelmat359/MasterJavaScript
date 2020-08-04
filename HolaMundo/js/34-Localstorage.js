'use strict'

// Comprobar disponibilidad de LocalStorage
if(typeof(Storage) !== "undefined"){
    console.log("StorageLocal: DISPONIBLE")
}else{
    console.log("StorageLocal: NO DISPONIBLE")
}

// Guardar datos en LocalStorage
localStorage.setItem("titulo", "Curso de JS");

//Recuperar elemento
document.querySelector('#peliculas').innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
    nombre: "Michel",
    email: "wwww",
    web: "localhost"
}

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar Objeto

var user = JSON.parse(localStorage.getItem("usuario"));
console.log(user);
document.querySelector('#datos').append(" " + user.nombre + " - " + user.web);

// Borrar memoria
localStorage.removeItem("usuario");