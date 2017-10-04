import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
  arrayNombre: string[];

  constructor() { }

  ngOnInit() {
    this.arrayNombre = ['Oscar', 'Simposon', 'Ortomáqitcvo'];
  }

}
