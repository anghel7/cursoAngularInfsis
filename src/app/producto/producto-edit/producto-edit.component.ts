import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.interface';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  producto: Producto;

  constructor() { }

  ngOnInit() {
  }

  yesAction(): void {
    console.log('yesActioin');
  }

  noAction(): void {
    console.log('noActioin');
  }

}
