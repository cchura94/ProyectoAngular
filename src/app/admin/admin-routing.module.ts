import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import { ServicioComponent } from './servicio/servicio.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'establecimiento',
        component: EstablecimientoComponent,
      },
      {
        path: 'servicio',
        component: ServicioComponent,
      },
      {
        path: 'categoria',
        component: CategoriaComponent,
      },
      /*{
        path: "usuario",
        component: UsuarioComponent
      }*/
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
