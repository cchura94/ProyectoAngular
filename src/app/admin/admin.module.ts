import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import { ServicioComponent } from './servicio/servicio.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    EstablecimientoComponent,
    ServicioComponent,
    CategoriaComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
