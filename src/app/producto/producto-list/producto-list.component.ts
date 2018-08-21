import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.interface';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  titulo: string;
  campoBusqueda: string = "hola";

  listaProductos: Producto[];

  constructor() {
    this.listaProductos = [];
    this.titulo = "Lista de productos"
  }

  ngOnInit() {
    this.listaProductos = [
      {
        nombre: "Detergent",
        precio: 5,
        stock: 2,
        cantidad: 10,
        marca: "Patido",
        id: 1
      },
      {
        nombre: "Aceite",
        precio: 10,
        stock: 5,
        cantidad: 40,
        marca: ""
      },
      {
        nombre: "Fosforo",
        precio: 2,
        stock: 7,
        cantidad: 15,
        marca: "Acme"
      }
    ];
  }

  buscar(): void {
    this.campoBusqueda = "nuevo busqueda";
  }

}
