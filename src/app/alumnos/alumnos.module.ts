import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormAlumnoComponent } from '../form-alumno/form-alumno.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';

@NgModule({
  declarations: [
    ListaAlumnosComponent,
    FormAlumnoComponent,
    DetalleAlumnoComponent,
  ],
  imports: [CommonModule],
})
export class AlumnosModule {}
