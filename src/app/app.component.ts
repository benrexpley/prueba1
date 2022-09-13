import { Component } from '@angular/core';
import { Alumno, seccion } from './historial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba1';

 public elementosGuardadosSeccion: Array<Alumno> =[];

 public nuevaAlumno(Alumno : Alumno): void{
   const id: number = this.elementosGuardadosSeccion.length + 1;
   Alumno.id = id;
 }


}
