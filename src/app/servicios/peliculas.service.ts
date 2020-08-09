import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; // map

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  // tslint:disable: no-inferrable-types
  private apikey: string = 'd110e649f6d0913e91df0d3a87d2960c';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient ) { }

  peliculascartelera: any;
  peliculaspopulares: any;
  peliculasinfantiles: any;
  peliculasbuscadas: any;

  peliculaclick: any;


  getPopulares(){
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&lenguage=es`;
    return this.http.get(url).pipe(
      map (
        (x: any) => {  this.peliculaspopulares = x.results;
                       console.log(this.peliculaspopulares); }// convierte el observable en array en peliculas
      )
    );
  }

  getInfantiles(){
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&lenguage=es`;
    return this.http.get(url).pipe(
      map (
        (z: any) => {  this.peliculasinfantiles = z.results;
                       console.log(this.peliculasinfantiles); }// convierte el observable en array en peliculas
      )
    );
  }
  buscarPelicula(texto: string){
    const url = `${ this.urlMoviedb }/search/movie?api_key=${ this.apikey }&query=${ texto }&language=es`;
    // tslint:disable-next-line: max-line-length
    return this.http.get( url ).pipe( map( (res: any) => { this.peliculasbuscadas = res.results; console.log(this.peliculasbuscadas); return res.results; } ));
  }

  datospelicula(evento){
    const peliculaclick = evento;
  }
}
