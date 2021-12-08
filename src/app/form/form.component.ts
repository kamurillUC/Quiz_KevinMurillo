import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Autor } from '../autor.interface';
import { Libro } from '../libro.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public autor: Autor = {
    nombre: '',
    apellido: '',
    cedula: '',
    fechaNacimiento: new Date(),
    generoPrincipal: ''
  };


  public libro: Libro = {
    nombre: '',
    annoCreacion: '',
    generoLibro: '',
    cedulaAutor: '',
  };

    
  public generos: Array<string> = ['Lírico', 'Narrativo', 'Teatral'];  
  public listaAutores: Array<Autor> = this._appService.autores;

  
  
  public onSubmitAuthor(){
    //Clean blank spaces from both sides
    this.autor.nombre.trim();
    this.autor.apellido.trim();
    this.autor.cedula.trim();
    this.autor.generoPrincipal.trim();

    this._appService.autores.push({...this.autor});    
    alert("El Autor ha sido creado exitosamente");

    //Clean form
    this.autor.nombre = '';
    this.autor.apellido = '';
    this.autor.cedula = '';
    this.autor.fechaNacimiento = new Date();
    this.autor.generoPrincipal = '';

  }

  public onSubmitBook(){
    //Clean blank spaces from both sides
    this.libro.nombre.trim();
    this.libro.annoCreacion.trim();
    this.libro.generoLibro.trim();
    this.libro.cedulaAutor.trim();

    this._appService.libros.push({...this.libro});    
    alert("El Libro ha sido creado exitosamente");

    //Clean form
    this.libro.nombre = '';
    this.libro.annoCreacion = '';
    this.libro.generoLibro = '';
    this.libro.cedulaAutor = '';

  }

 
  constructor(private _appService: AppService) { }
  

  ngOnInit(): void {
  }

}







