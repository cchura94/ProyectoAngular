import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { AuthGuard } from './guards/auth.guard';
import { IngresarComponent } from './ingresar/ingresar.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PrincipalComponent } from './principal/principal.component';
import { PublicacionComponent } from './publicacion/publicacion.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: '',
        component: PrincipalComponent,
      },
      {
        path: 'nosotros',
        component: NosotrosComponent,
        children: [
          {
            path: 'directivas',
            component: DirectivasComponent,
          },
        ],
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
      {
        path: 'publicaciones',
        component: PublicacionComponent,
        //canActivate: [AuthGuard],
      },
      {
        path: 'ingresar',
        component: IngresarComponent,
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
