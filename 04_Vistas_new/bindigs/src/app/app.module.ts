import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { ListasComponent } from './listas/listas.component';
import { PensamientosComponent } from './pensamientos/pensamientos.component';

@NgModule({
  declarations: [
    AppComponent,
    Formulario2Component,
    ListasComponent,
    PensamientosComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
