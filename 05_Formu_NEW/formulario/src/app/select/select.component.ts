import { Component, OnInit } from '@angular/core';
import { Provincia } from './provincias.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  arrayProvincias: Provincia[];
  provinciaSel: Provincia;
  constructor() { }

  ngOnInit() {
    this.arrayProvincias = [
      {idPro: 2, namePro: 'Malaga'},
      {idPro: 3, namePro: 'Sevilla'},
      {idPro: 1, namePro: 'Almeria'},
      {idPro: 4, namePro: 'Granada'},
      new Provincia (5, 'Jaen')
    ]  
    this.provinciaSel = {idPro: 0, namePro:''};
  }

  avisarProvincia(){
    console.log(this.provinciaSel);
  }

}
