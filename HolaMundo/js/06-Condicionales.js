'use strict'

//Condicional if
// estructura de control para comparar algo

var edad1 = 30;
var edad2 = 12;
var edad = 33;
var nombre ="Miguel angel";

// Si pasa esto, ejecuta esto
if(edad1 > edad2){
    console.log("edad1 es mayor que edad2");
}else{
    console.log("La edad2 es mayo que edad1");
}


if(edad > 18){
    console.log(nombre+ " tiene "+edad1+" años, es mayor de edad");
    if(edad <= 30){
        console.log("Todavia eres milenial")
    }else if(edad >= 70){
        console.log("Eres anciano.");
    }else{
        console.log("Ya no eres milenial");
    }
}else{
    console.log('No eres mayor de edad');
}

if (edad > 18 && edad <= 30){
    console.log("Mayor de edad y milenial")
}else if(edad <= 18 || edad >= 70){
    console.log("No es milenial");
}else{
    console.log("Es mayor de edad pero no milenial");
}