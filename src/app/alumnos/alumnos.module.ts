import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormAlumnosComponent } from './form-alumnos/form-alumnos.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';

@NgModule({
  declarations: [
    ListaAlumnosComponent,
    FormAlumnosComponent,
    DetalleAlumnoComponent,
  ],
  imports: [CommonModule],
})
export class AlumnosModule {}
