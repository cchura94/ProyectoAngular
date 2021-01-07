import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import { ServicioComponent } from './servicio/servicio.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { NavegacionComponent } from '../material/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AdminComponent,
    EstablecimientoComponent,
    ServicioComponent,
    CategoriaComponent,
    NavegacionComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
