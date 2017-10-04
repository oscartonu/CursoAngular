import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impresora',
  templateUrl: './impresora.component.html',
  styleUrls: ['./impresora.component.css']
})
export class ImpresoraComponent implements OnInit {
  arrayImpresoras: string[];
  impresoraSel: string;
  print: boolean; // true si se selcciona impreme
  isClaro: boolean;

  constructor() {  }

  ngOnInit() {
    this.arrayImpresoras = ['Epson Jandemor V4', 'HP planta baja', 'Oh Broher DF34'];
    this.print = false;
    this.isClaro = false;
  }

  mostrarFinal() {
  }

}
