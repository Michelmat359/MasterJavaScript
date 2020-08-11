import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';
 
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ ZapatillaService ]
})

export class ZapatillasComponent implements OnInit{
    public titulo : string = "Componente Zapatillas";
    public zapatillas : Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mimarca: string;


    constructor(
        private _zapatillaService : ZapatillaService,
    ){
        this.color = 'orange';
        this.marcas = new Array();
        console.log('[Constructor ZapatillasComponent] True');
    }

    ngOnInit(){
        console.log('[ngOnInit ZapatillasComponent] True');
        this.zapatillas =  this._zapatillaService.getZapatillas();
        this.getmarcas();
    }

    getmarcas(){
        this.zapatillas.forEach((zapatilla, index)=>{
            if(this.marcas.indexOf(zapatilla.marca)<0)
                this.marcas.push(zapatilla.marca);
        });
        console.log(this.marcas);
    }
    getMarca(){
        alert(this.mimarca);
    }

    addMarca(){
        this.marcas.push(this.mimarca);
    }

    borrarMarca(indice){
        console.log(indice);
        // delete this.marcas[indice];
        this.marcas.splice(indice, 1);
    }

    onBlur(){
        console.log("[onBlur ZapatillasCOmponent] Ha entrado en blur");
    }

    mostrarPalabra(){
        alert(this.mimarca);
    }
}