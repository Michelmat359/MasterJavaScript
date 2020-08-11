import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo : string;
    public listado : string;
    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos mas populares";
        console.log('[Constructor VideojuegoComponent] True');
    }

    ngOnInit(){
        console.log('[ngOnInit VideojuegoComponent] True');
    }

    ngDoCheck(){
        console.log('[ngDoCheck VideojuegoComponent] True');
    }

    ngOnDestroy(){
        console.log('[ngOnDestroy VideojuegoComponent] True');
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo"
    }
}