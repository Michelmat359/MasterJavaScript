'use script'
/* Programa que pida dos numeros y que nos diga cual es el mayor, menor o iguales */
/* Si  los numeros son menor que 0 o son letras, pedirlo de nuevo */
var num1 = parseInt(prompt("Introduce un numero", 0));
var num2 = parseInt(prompt("Introduce un segundo numero", 0));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    alert("Has introducido una letra o numero inferior a 0. Vuelve a intentarlo. ")
    num1 = parseInt(prompt("Introduce un numero", 0));
    num2 = parseInt(prompt("Introduce un segundo numero", 0));
}



if(num1 == num2){
    alert("Los numeros son iguales.");
}else if (num1 > num2){
    alert("El primer numero es mayo que el segundo.");
}else if (num1 < num2){
    alert("El segundo numero es mayor que el primero.")
}else{
    alert("Introduce numeros.");
}


