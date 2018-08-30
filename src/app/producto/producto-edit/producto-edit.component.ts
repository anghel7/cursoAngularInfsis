import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  producto: Producto;

  constructor(private myActivatedRoute: ActivatedRoute,
    private myProductoService: ProductoService) { }

  ngOnInit() {
    // let observador
    this.myActivatedRoute.params
      .subscribe(
        (parametros) => {
          console.log('Parametros Recuperados: ', parametros.id);
          this.myProductoService.getProductoById(parametros.id)
            .subscribe(
              (productoRecuperado: Producto) => {
                this.producto = productoRecuperado;
              },
              (error) => { },
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
    console.log('yesActioin');
  }

  noAction(): void {
    console.log('noActioin');
  }

}
