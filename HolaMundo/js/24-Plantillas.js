'use strict'

// Plantilals de texto

var nombre = prompt("METE TU NOMBRE")
var apellidos = prompt("METE TUS APELLDOS")

var texto_1 = " Mi nombre es "+ nombre + " y mi apellido es "+ apellidos;

var texto = `
    <h1> Hola que tal </h1>
    <h3> Mi nombre es: ${nombre} </h3>
    <h3> Mis apellidos son: ${apellidos} </h3>
`;

document.write(texto);