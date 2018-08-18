import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoItemComponent } from './producto-item/producto-item.component';
import { ProductoListComponent } from './producto-list/producto-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductoItemComponent,
    ProductoListComponent
  ],
  exports: [
    ProductoItemComponent,
    ProductoListComponent
  ]
})
export class ProductoModule { }
