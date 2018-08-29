import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto.interface';

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

  constructor() {
    this.onFocused = new EventEmitter();
  }

  mostrarDetalle(): void {
    this.onFocused.emit(this.producto);
  }

  ngOnInit() {
  }

}
