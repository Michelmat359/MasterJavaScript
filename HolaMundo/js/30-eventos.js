'use strict'

// EVENTOS
// Eventos del raton


window.addEventListener('load', () => {

    function cambiarcolor() {
        console.log("me has dado click");
        var bg = boton.style.background;
        if (bg == 'green') {
            boton.style.background = 'red';

        } else {
            boton.style.background = 'green';
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solic #ccc"
        return true;
    }

    var boton = document.querySelector("#boton");
    //Evento click
    boton.addEventListener('click', function () { cambiarcolor() });

    //Pasar por encima
    boton.addEventListener('mouseover', function () {
        boton.style.background = '#ccc';
    })

    // Quitar el raton de envima
    boton.addEventListener('mouseout', function () {
        boton.style.background = "yellow";
    })


    // Eventos de teclado
    // Focus
    var input = document.querySelector('#campo_nombre')
    input.addEventListener('focus', function () {
        console.log('FOCUS: Estas dentro del input');
    })

    // Blur
    input.addEventListener('blur', function () {
        console.log('BLUR: Estas fuera del input');
    })

    // KeyDown
    input.addEventListener('keydown', function (event) {
        console.log('KEYDOWN: Estas pulsando una tecla', String.fromCharCode(event.keyCode));
    })

    // KeyPress
    input.addEventListener('keydown', function (event) {
        console.log('KEYPRESS: Tecla presionada', String.fromCharCode(event.keyCode));
    })

    // KeyUp
    input.addEventListener('keyup', function (event) {
        console.log('KEYUP: Tecla soltada,', String.fromCharCode(event.keyCode));
    })

});