'use strict'

var year = 2020;

while(year <= 2051){
    console.log("Estamos en el año " + year);
    if(year == 2030){
        break;
    }
    year++;

}

// Do while
var years = 30;
do{
    alert("SOLO SE EJECUITA CUANDO ES 20");
    years--;
}while (years > 25)