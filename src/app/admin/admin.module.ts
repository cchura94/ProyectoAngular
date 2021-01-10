import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import { ServicioComponent } from './servicio/servicio.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { NavegacionComponent } from '../material/navegacion/navegacion.component';
import { EstablecimientoListaComponent } from './establecimiento/establecimiento-lista/establecimiento-lista.component';
import { EstablecimientoCrearComponent } from './establecimiento/establecimiento-crear/establecimiento-crear.component';
import { EstablecimientoModificarComponent } from './establecimiento/establecimiento-modificar/establecimiento-modificar.component';

@NgModule({
  declarations: [
    AdminComponent,
    EstablecimientoComponent,
    ServicioComponent,
    CategoriaComponent,
    NavegacionComponent,
    EstablecimientoListaComponent,
    EstablecimientoCrearComponent,
    EstablecimientoModificarComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
