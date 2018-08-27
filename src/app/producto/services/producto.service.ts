import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //get, getall, create, update, delete
  constructor() { }

  getAllProductos(): Producto[] {
    return [];
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
