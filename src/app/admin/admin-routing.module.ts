import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import { ServicioComponent } from './servicio/servicio.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EstablecimientoListaComponent } from './establecimiento/establecimiento-lista/establecimiento-lista.component';
import { EstablecimientoCrearComponent } from './establecimiento/establecimiento-crear/establecimiento-crear.component';
import { EstablecimientoModificarComponent } from './establecimiento/establecimiento-modificar/establecimiento-modificar.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'establecimiento',
        component: EstablecimientoComponent,
        children: [
          {
            path: '',
            component: EstablecimientoListaComponent,
          },
          {
            path: 'nuevo',
            component: EstablecimientoCrearComponent,
          },
          {
            path: ':id/editar',
            component: EstablecimientoModificarComponent,
          },
        ],
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
