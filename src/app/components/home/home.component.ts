import { Component} from '@angular/core';
import { PeliculasService } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public ps: PeliculasService) {






this.ps.getPopulares().subscribe(
  data => console.log(data)
);

this.ps.getInfantiles().subscribe(
  data => console.log(data)
);
}

}
