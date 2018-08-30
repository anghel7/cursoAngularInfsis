import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

  @Input()
  producto: Producto;
  // alt + shift + f windows
  // ctrl + shift + i linux
  @Output()
  onFocused: EventEmitter<Producto>;

  constructor(private myProductoService: ProductoService,
    private myRouter: Router) {
    this.onFocused = new EventEmitter();
  }

  mostrarDetalle(): void {
    this.onFocused.emit(this.producto);
  }

  ngOnInit() {
  }


  editarProducto(): void {
    console.log('Editando Producto');
  }

  eliminarProducto(): void {
    this.myProductoService.deleteProductoById(this.producto.id_producto)
      .subscribe(
        (productoDeleted: Producto) => {
          console.log('Se elimino el producto: ', productoDeleted);
          this.myRouter.navigate(['home']);
          this.myRouter.navigate(['producto', 'lista']);
        },
        (error) => {
          console.log('Error al eliminar: ', error);
        },
        () => { }
      );
  }
}
