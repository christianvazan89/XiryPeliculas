import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PeliculasService } from './servicios/peliculas.service';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VerpeliculaComponent } from './components/verpelicula/verpelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,
    NavbarComponent,
    VerpeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
