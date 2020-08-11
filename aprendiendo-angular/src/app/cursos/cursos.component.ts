import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
	public followers: number;

  constructor(
    private _route: ActivatedRoute,
		private _router: Router
  ) {
    console.log('[Constructor CursosComponent] True')
   }

  ngOnInit(): void {
    console.log('[ngOnInit CursosComponent] True');
    this._route.params.subscribe((params: Params) => {
      console.log('[subscribe _route.params] True');
			this.nombre = params.nombre;
			this.followers = +params.followers;

			// if(this.nombre == 'ninguno'){
			// 	this._router.navigate(['/home']);
      // }
    });


  }

  redirigir(){
		this._router.navigate(['/zapatillas']);
	}
}
