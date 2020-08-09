import { Component } from '@angular/core';
import { PeliculasService } from './servicios/peliculas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XiryPeliculas';

  constructor(public ps: PeliculasService){ }
}
