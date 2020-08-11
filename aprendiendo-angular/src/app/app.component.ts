import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master de Miguel Angel';
  public descripcion : string;
  public mostrarVideojuegos: boolean = true;

constructor(){
  this.title = Configuracion.titulo;
  this.descripcion = Configuracion.descripcion;
}


  ocultarVideojuegos(res: boolean){
    this.mostrarVideojuegos = res;
  }
}
