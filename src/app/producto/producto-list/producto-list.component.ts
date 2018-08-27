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
        id_producto: 2,
        nombre: "Sardina",
        precio: 12,
        stock: 20,
        cantidad: 50,
        marca: "Lidita",
        image_url: "http://cursoangular.hosting.cs.umss.edu.bo/images/producto/sardina.jpg"
      },
      {
        id_producto: 3,
        nombre: "Fideo",
        precio: 4,
        stock: 22,
        cantidad: 55,
        marca: "Famosa",
        image_url: "http://cursoangular.hosting.cs.umss.edu.bo/images/producto/fideo.jpg"
      },
      {
        id_producto: 4,
        nombre: "Leche",
        precio: 6,
        stock: 15,
        cantidad: 20,
        marca: "Pil",
        image_url: "http://cursoangular.hosting.cs.umss.edu.bo/images/producto/leche.jpg"
      }
    ];
  }

  buscar(): void {
    this.campoBusqueda = "nuevo busqueda";
  }

}
