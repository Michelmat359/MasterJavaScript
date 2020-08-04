'use strict'

// Timers


window.addEventListener('load', () => {

    function intervalo() {
        //setTimeOut lo ejecuta solo una vez
        var tiempo = setInterval(function () {
            console.log("Set interval ejecutado");
            var fondo = document.querySelector("h1");
            if (fondo.style.fontSize == '50px') {
                fondo.style.fontSize = '30px';
            } else {
                fondo.style.fontSize = '50px';
            }

        }, 2000);
        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");
    stop.addEventListener('click', function () {
        clearInterval(tiempo);
        alert("Has parado el parpadeo del h1");
    })

    var start = document.querySelector('#start');
    start.addEventListener('click', function () {
        intervalo();
        alert("Has iniciado el parpadeo del h1");
    })

});