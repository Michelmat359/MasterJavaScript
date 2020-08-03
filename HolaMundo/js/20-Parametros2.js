'use strict'

// Parametros REST y SPREAD

function listadoFrutras(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1 " + fruta1 );
    console.log("Fruta 2 " + fruta2 );
    console.log(resto_de_frutas);


}

var frutas = ["Naranja", "Manzana"];
listadoFrutras( ...frutas, "Sandia", "Pera", "Melon", "Coco");
