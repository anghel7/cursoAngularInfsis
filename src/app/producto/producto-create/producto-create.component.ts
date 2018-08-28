import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.interface';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css']
})
export class ProductoCreateComponent implements OnInit {

  producto: Producto = {
    nombre: '',
    marca: '',
    precio: 0,
    cantidad: 0,
    stock: 0,
    image_url: ''
  }

  constructor() { }

  ngOnInit() {
  }

  yesAction(): void {
    console.log('yesAction');

  }

  noAction(): void {
    console.log('noActioin');

  }

}
