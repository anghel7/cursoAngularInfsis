import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoItemComponent } from './producto-item/producto-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductoItemComponent],
  exports:[ProductoItemComponent]
})
export class ProductoModule { }
