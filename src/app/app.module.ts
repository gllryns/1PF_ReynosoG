import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigComponent } from './navig/navig.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';

@NgModule({
  declarations: [AppComponent, NavigComponent, FormAlumnoComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    ReactiveFormsModule,
    AlumnosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
