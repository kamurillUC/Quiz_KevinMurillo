import { Injectable } from '@angular/core';
import { Autor } from './autor.interface';
import { Libro } from './libro.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public autores: Array<Autor> = [];
  public libros: Array<Libro> = [];

  constructor() { }
}
