import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioSeccionComponent } from './formulario-seccion/formulario-seccion.component';
import { FormularioAlumnoComponent } from './formulario-alumno/formulario-alumno.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioSeccionComponent,
    FormularioAlumnoComponent,
    FormularioRegistroComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
