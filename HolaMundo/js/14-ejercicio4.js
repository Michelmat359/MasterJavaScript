'use strict'

/* Mostrar todos los numeros impares entre dos numeros introducidos por el usuario */


var num1 = parseInt(prompt("Introduce un numero", 0));
var num2 = parseInt(prompt("Introduce un segundo numero", 0));


while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    alert("Has introducido una letra o numero inferior a 0. Vuelve a intentarlo. ")
    num1 = parseInt(prompt("Introduce un numero", 0));
    num2 = parseInt(prompt("Introduce un segundo numero", 0));
}

while(num1<num2){
    num1++;

    if(num1%2 != 0){
        console.log("El numero"+ num1 + "es impar.")
    }

}