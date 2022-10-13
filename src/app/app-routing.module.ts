import { FormAlumnoComponent } from './alumnos/form-alumno/form-alumno.component';
import { ListaAlumnosComponent } from './alumnos/lista-alumnos/lista-alumnos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'form-alumno', component: FormAlumnoComponent },
  { path: 'lista-alumnos', component: ListaAlumnosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
