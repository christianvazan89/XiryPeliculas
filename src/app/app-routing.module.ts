import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { VerpeliculaComponent } from './components/verpelicula/verpelicula.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'verpelicula/:id/:pelicula', component: VerpeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
