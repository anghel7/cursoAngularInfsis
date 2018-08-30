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

  @Output()
  onDeleted: EventEmitter<Producto>;

  constructor(private myProductoService: ProductoService,
    private myRouter: Router) {
    this.onFocused = new EventEmitter();
    this.onDeleted = new EventEmitter();
  }

  mostrarDetalle(): void {
    this.onFocused.emit(this.producto);
  }

  ngOnInit() {
  }

  eliminarProducto(id: number): void {
    //Solucion facil ir al home
    //this.myRouter.navigate(['home']);
    this.myProductoService.deleteProductoById(id)
      .subscribe(
        (producto: Producto) => {
          this.onDeleted.emit(producto);
        },
        (error) => {
          console.log('Error al eliminar el producto: ', error);
        },
        () => { }
      );
  }
}
