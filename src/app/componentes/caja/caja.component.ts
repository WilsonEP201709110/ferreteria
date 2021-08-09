import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goInicio() {this.router.navigate(['/inicio']);}
  goDespacho() {this.router.navigate(['/despacho']);}
  goInventario() {this.router.navigate(['/inventario']);}

}
