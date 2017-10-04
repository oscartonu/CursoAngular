import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamientos',
  templateUrl: './pensamientos.component.html',
  styleUrls: ['./pensamientos.component.css']
})
export class PensamientosComponent implements OnInit {
  arrayPensamientos: string[];
  pensamiento: string;
  constructor() { }

  ngOnInit() {
    this.arrayPensamientos = [];
  }

  addPensamiento() {
    this.arrayPensamientos.push(this.pensamiento);
    this.pensamiento = '';
  }
}
