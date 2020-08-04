'use strict'


window.addEventListener('load', () => {
    var pelicula = {
        titulo: "batman",
        year: 2020,
        pais: "Estados unidos"
    };

    console.log(pelicula);
    pelicula.titulo = 'Superman';
    console.log(pelicula);
    console.log(pelicula.titulo);

    var peliculas = [
        pelicula,
        {
            titulo: "La verdad duele",
            year: 2020,
            pais: "España"
        },
        {
            titulo: "Batman",
            year: 2023,
            pais: "Estados unidos"
        }
    ];


    var caja_peliculas = document.querySelector('#peliculas')
    for (var peli in peliculas) {
            var p = document.createElement("p");
            p.append(peliculas[peli].titulo + " - " + peliculas[peli].year);
            caja_peliculas.append(p);
    }


});