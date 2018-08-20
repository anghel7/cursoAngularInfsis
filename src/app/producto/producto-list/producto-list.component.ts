import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  titulo:string;
  campoBusqueda:string="hola";

  constructor() {
    this.titulo = "Lista de productos"
  }

  ngOnInit() {
  }

  buscar():void{
    this.campoBusqueda="nuevo busqueda";
  }

}
