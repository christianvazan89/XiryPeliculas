import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  buscar: string = '';
  constructor(public ps: PeliculasService) {
   }


  ngOnInit(): void {
  }

  buscarpelicula(){
    // tslint:disable-next-line: triple-equals
    if (this.buscar.length == 0){
      return;
    }

    this.ps.buscarPelicula(this.buscar)
    .subscribe();
  }



}
