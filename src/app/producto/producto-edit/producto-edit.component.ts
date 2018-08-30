import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  producto: Producto;

  constructor(private myActivatedRoute: ActivatedRoute,
    private myProductoService: ProductoService,
    private myRouter: Router) { }

  ngOnInit() {
    // let observador
    this.myActivatedRoute.params
      .subscribe(
        (parametros) => {
          //console.log('Parametros Recuperados: ', parametros.id);
          this.myProductoService.getProductoById(parametros.id)
            .subscribe(
              (productoRecuperado: Producto) => {
                this.producto = productoRecuperado;
              },
              (error) => {
                console.log('Error recuperando el producto: ', error);
              },
              () => { }
            );
        },
        (error) => {
          console.log('Error al recuperar los paramateros: ', error);
        },
        () => {
          console.log('Proceso Finalizado');

        }
      );
  }

  yesAction(): void {
    this.myProductoService
      .updateProducto(this.producto.id_producto, this.producto)
      .subscribe(
        (productoUpdated: Producto) => {
          //console.log('El producto a sido actualizado: ', productoUpdated);
          this.myRouter.navigate(['producto','lista']);
        },
        (error) => {
          console.log('error al actualizar el producto: ', error);
        },
        () => { }
      );
  }

}
