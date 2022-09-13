export interface seccion{
  idNumerica: number;
  nombreSeccion: string;
}

export interface Alumno{
  id?: number;
  rut: string;
  nombre: string;
  apellido: string;
  edad: string;
  seccion: string;
  imagen: string;
}

export interface RegistroHistorial{
  fechaYhora: string;
  alumno: Alumno;
}
