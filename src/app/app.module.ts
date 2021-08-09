import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CajaComponent } from './componentes/caja/caja.component';
import { DespachoComponent } from './componentes/despacho/despacho.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CajaComponent,
    DespachoComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
