import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DirectivasComponent } from './directivas/directivas.component';

@NgModule({
  declarations: [AppComponent, PruebaComponent, ContactoComponent, DirectivasComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
