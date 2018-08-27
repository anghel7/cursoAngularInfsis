import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { PRODUCTOS } from '../mocks/producto.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //get, getall, create, update, delete
  constructor() { }

  getAllProductos(): Producto[] {
    return PRODUCTOS;
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
