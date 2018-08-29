import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto.interface';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {

  @Input()
  producto: Producto;

  constructor() { }

  ngOnInit() {
  }

}
