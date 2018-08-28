import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { ProductoService } from '../services/producto.service';
import { Observer } from 'rxjs';

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
    let observador: Observer<Producto[]> = {
      next: (listaProducto) => {
        console.log('mostrando Data: ', listaProducto);
        this.listaProductos = listaProducto;
      },
      error: (error) => {
        console.log('Se produjo el siguente error al recuperar la lista de productos: ', error);

      },
      complete: () => {
        console.log('Proceso finalizado');
      }
    };

    this.myProductoService.getAllProductos()
      .subscribe(observador);
  }

  buscar(): void {
    this.campoBusqueda = "nuevo busqueda";
  }

}
