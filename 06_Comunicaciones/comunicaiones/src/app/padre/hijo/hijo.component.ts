import { any } from 'codelyzer/util/function';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() usuario: string;
  @Output() responder: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

    }

  lanzarEvento() {
    this.responder.emit();
  }

}
