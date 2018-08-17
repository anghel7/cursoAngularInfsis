import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.interface';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

  producto: Producto;
  titulo: string = 'Producto';
  // alt + shift + f windows
  // ctrl + shift + i linux
  constructor() {
    this.producto = {
      nombre: "Coca Colla",
      precio: 12.5,
      stock: 10
    };
  }

  ngOnInit() {
  }

}
