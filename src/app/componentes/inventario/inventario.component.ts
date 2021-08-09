import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goInicio() {this.router.navigate(['/inicio']);}
  goCaja() {this.router.navigate(['/caja']);}
  goDespacho() {this.router.navigate(['/despacho']);}

}
