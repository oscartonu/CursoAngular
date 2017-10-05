import { Component, OnInit } from '@angular/core';
import { ServiceLibrosService } from '../services/service-libros.service';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  claveLibro: string;
  arrayLibros: string [];

  constructor(private serviceLibros: ServiceLibrosService ) { }

  ngOnInit() {
  }

  buscaLibros() {
    this.arrayLibros = this.serviceLibros.getLibros(this.claveLibro);
    console.log(this.claveLibro);
  }

}
