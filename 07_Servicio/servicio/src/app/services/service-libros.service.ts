import { Injectable } from '@angular/core';
import { LIBROS } from '../mockLibros';
@Injectable()
export class ServiceLibrosService {

  arrayLibros = LIBROS;
  constructor() { }

  getLibros(clave) {
    console.log('desde el sevicio, la clave: ' + clave);
    return this.arrayLibros;
  }
}
