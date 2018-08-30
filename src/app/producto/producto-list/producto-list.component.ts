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
  listaProductos: Producto[] = [];
  productoDetailed: Producto;
  listaProductosDatsource: Producto[] = [];

  constructor(private myProductoService: ProductoService) {
  }

  ngOnInit() {
    let observador: Observer<Producto[]> = {
      next: (listaProducto) => {
        this.listaProductos = listaProducto;
        this.listaProductosDatsource = listaProducto;
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

  buscar($event: string): void {
    this.listaProductosDatsource = this.listaProductos.filter(
      (producto) => {
        let nombreProducto: string = producto.nombre;
        return nombreProducto.toLocaleLowerCase().includes($event.toLowerCase());
      }
    );

  }

  focusedAction($event: Producto): void {
    //console.log('Recibiendo datos del component hijo: ', $event);
    this.productoDetailed = $event;
  }

}
