import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { PRODUCTOS } from '../mocks/producto.mock';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://cursoangular.hosting.cs.umss.edu.bo/api/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //get, getall, create, update, delete
  constructor(private myHttpClient: HttpClient) { }

  getAllProductos(): Observable<Producto[]> {
    return this.myHttpClient.get<Producto[]>(API_URL);
  }

  getProductoById(id: number): Producto {
    return null;
  }

  createProducto(productoToCreate: Producto): Observable<Producto> {
    return this.myHttpClient.post<Producto>(API_URL, productoToCreate);
  }

  updateProducto(id: number, productoToUpdate: Producto): Producto {
    return null;
  }

  deleteProductoById(id: number): Producto {
    return null;
  }

}
