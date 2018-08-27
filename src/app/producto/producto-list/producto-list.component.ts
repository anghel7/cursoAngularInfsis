import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  titulo: string = "Lista de productos";
  campoBusqueda: string = "hola";
  listaProductos: Producto[] = [];

  constructor(private myProductoService: ProductoService) {
  }

  ngOnInit() {
    this.listaProductos = this.myProductoService.getAllProductos();
  }

  buscar(): void {
    this.campoBusqueda = "nuevo busqueda";
  }

}
