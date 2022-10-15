import { Component, Input, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})
export class ListaAlumnosComponent implements OnInit {
  Titulo = 'Listado de alumnos';
  errorMessage: string = '';
  columnas: string[] = ['id', 'nombre', 'email', 'edad'];
  public dataSource: any;

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos() {
    this.alumnosService.getAlumnos().subscribe({
      next: (alumnos) => {
        this.dataSource = new MatTableDataSource(alumnos);
      },
      error: (err) => {
        this.errorMessage = <any>err;
      },
      complete: () => {
        console.info('Obtener alumnos');
      },
    });
  }
}
