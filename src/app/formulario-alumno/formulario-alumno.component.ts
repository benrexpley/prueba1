import { Component, EventEmitter, Output } from '@angular/core';
import { Alumno } from '../historial.component';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {
  @Output() public mostrar = new EventEmitter;
  @Output() public mostrarString = new EventEmitter<string>();
  @Output() public enviarDato = new EventEmitter<Alumno>();

  public nuevoHistorial: Alumno = {
    rut: '',
    nombre: '',
    apellido: '',
    edad: '',
    seccion:'',
    imagen: ''
  }

  public cambiarRut(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.rut = elemento.value;
  }

  public cambiarNombre(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombre = elemento.value;
  }

  public cambiarApellido(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.apellido = elemento.value;
  }

  public cambiarEdad(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.edad = elemento.value;
  }

  public cambiarSeccion(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.seccion = elemento.value;
  }

  public guardarHistorial(): void {
    const copia : Alumno ={
      ...this.nuevoHistorial
    }
    this.enviarDato.emit(copia);
    this.nuevoHistorial.rut = '';
    this.nuevoHistorial.nombre = '';
    this.nuevoHistorial.apellido = '';
    this.nuevoHistorial.edad = '';
    this.nuevoHistorial.seccion = '';
    this.nuevoHistorial.imagen = '';
    console.log('hola que hace :D')
    this.mostrar.emit() }

}
