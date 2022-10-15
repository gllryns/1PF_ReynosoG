import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormAlumnosComponent } from './form-alumnos/form-alumnos.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    ListaAlumnosComponent,
    FormAlumnosComponent,
    DetalleAlumnoComponent,
  ],
  imports: [CommonModule, MatTableModule, MatSortModule, SharedModule],
  exports: [
    MatTableModule,
    ListaAlumnosComponent,
    FormAlumnosComponent,
    DetalleAlumnoComponent,
    MatSortModule,
  ],
  providers: [],
})
export class AlumnosModule {}
