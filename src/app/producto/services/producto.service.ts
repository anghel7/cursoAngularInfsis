import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { PRODUCTOS } from '../mocks/producto.mock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //get, getall, create, update, delete
  constructor() { }

  getAllProductos(): Observable<Producto[]> {
    return Observable.create(
      (observer) => {
        //observer.next(PRODUCTOS);
        //observer.error(new Error('Error ;) '));
        //observer.complete();
        setTimeout(() => {
          observer.next(PRODUCTOS);
          observer.complete();
        }, 5000);

      }
    );
  }

  getProductoById(id: number): Producto {
    return null;
  }

  createProducto(productoToCreate: Producto): Producto {
    return null;
  }

  updateProducto(id: number, productoToUpdate: Producto): Producto {
    return null;
  }

  deleteProductoById(id: number): Producto {
    return null;
  }

}
