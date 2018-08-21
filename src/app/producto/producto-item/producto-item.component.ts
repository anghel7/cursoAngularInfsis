import { Component, OnInit, Input } from '@angular/core';
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
  constructor() { }

  mostrarDetalle(): void {
    console.log('Producto: ', this.producto);
  }

  ngOnInit() {
  }

}
