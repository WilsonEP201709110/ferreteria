import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goInventrario() {this.router.navigate(['/inventario']);}
  goCaja() {this.router.navigate(['/caja']);}
  goDespacho() {this.router.navigate(['/despacho']);}
}
