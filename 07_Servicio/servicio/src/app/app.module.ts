import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { ServiceLibrosService } from './services/service-libros.service';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ServiceLibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
