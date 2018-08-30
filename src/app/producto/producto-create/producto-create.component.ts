import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { ProductoService } from '../services/producto.service';
import { Observer } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private myProductoService: ProductoService,
    private myRouter: Router) { }

  ngOnInit() {
  }

  yesAction(): void {
    let observador: Observer<Producto> = {
      next: (producto) => {
        this.myRouter.navigate(['lista', 'producto']);
      },
      error: (error) => {
        console.log('Se produjo el siguente error al recuperar al crear un productos: ', error);

      },
      complete: () => {
        console.log('Proceso finalizado');
      }
    };

    this.myProductoService.createProducto(this.producto)
      .subscribe(observador);
  }
}
