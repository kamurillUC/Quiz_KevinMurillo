import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor.interface';
import { Libro } from '../libro.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public autors: Array<Autor> = [];
  public libros: Array<Libro> = [];

  public autorSeleccionado: Autor = {
    nombre: '',
    apellido: '',
    cedula: '',
    fechaNacimiento: new Date(),
    generoPrincipal: ''
  };

  public librosAutor: Array<Libro> = [];

  public onVerLibrosAutor(rw: number){
    this.autorSeleccionado = this.autors[rw]; 
    
    this.librosAutor = [];

    this._appService.libros.forEach(libro => {
      if (libro.cedulaAutor == this.autorSeleccionado.cedula) {
        this.librosAutor.push(libro);
      }
    });

    

  }

  constructor(private _appService: AppService) { 
    this.autors = this._appService.autores;
    this.libros = this._appService.libros;
  }

  ngOnInit(): void {
  }

}

