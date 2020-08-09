import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../servicios/peliculas.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verpelicula',
  templateUrl: './verpelicula.component.html',
  styleUrls: ['./verpelicula.component.css']
})
export class VerpeliculaComponent implements OnInit {

  numeropeli: number;
  pelicula: any;
  constructor(public ps: PeliculasService, private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    // tslint:disable-next-line: no-string-literal
    this.pelicula = this.activatedroute.snapshot.params['pelicula.original_title'];
    // tslint:disable-next-line: no-string-literal
    this.numeropeli = this.activatedroute.snapshot.params['id'];
    // tslint:disable-next-line: no-string-literal
    console.log(this.pelicula);
  }

}
