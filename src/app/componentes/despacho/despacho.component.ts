import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-despacho',
  templateUrl: './despacho.component.html',
  styleUrls: ['./despacho.component.css']
})
export class DespachoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goInicio() {this.router.navigate(['/inicio']);}
  goCaja() {this.router.navigate(['/caja']);}
  goInventario() {this.router.navigate(['/inventario']);}
}
