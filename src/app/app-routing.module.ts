import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { CajaComponent } from './componentes/caja/caja.component';
import { DespachoComponent } from './componentes/despacho/despacho.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'caja',
    component: CajaComponent
  },
  {
    path: 'despacho',
    component: DespachoComponent
  },
  {
    path: 'inventario',
    component: InventarioComponent
  },
  {
    path: '',
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
