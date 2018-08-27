import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  titulo: string;
  campoBusqueda: string = "hola";

  listaProductos: Producto[];

  constructor(private myProductoService: ProductoService) {
    this.listaProductos = [];
    this.titulo = "Lista de productos"
  }

  ngOnInit() {
    this.listaProductos = this.myProductoService.getAllProductos();
  }

  buscar(): void {
    this.campoBusqueda = "nuevo busqueda";
  }

}
