import { Producto } from "../models/producto.interface";

export const PRODUCTOS: Producto[] = [
  {
    id_producto: 2,
    nombre: "Sardina",
    precio: 12,
    stock: 20,
    cantidad: 50,
    marca: "Lidita",
    image_url: "http://cursoangular.hosting.cs.umss.edu.bo/images/producto/sardina.jpg"
  },
  {
    id_producto: 3,
    nombre: "Fideo",
    precio: 4,
    stock: 22,
    cantidad: 55,
    marca: "Famosa",
    image_url: "http://cursoangular.hosting.cs.umss.edu.bo/images/producto/fideo.jpg"
  },
  {
    id_producto: 4,
    nombre: "Leche",
    precio: 6,
    stock: 15,
    cantidad: 20,
    marca: "Pil",
    image_url: "http://cursoangular.hosting.cs.umss.edu.bo/images/producto/leche.jpg"
  }
];