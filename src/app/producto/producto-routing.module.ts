import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoCreateComponent } from './producto-create/producto-create.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';

const routesProducto: Routes = [
  {
    path: 'lista',
    component: ProductoListComponent
  },
  {
    path: 'crear',
    component: ProductoCreateComponent
  },
  {
    path: 'editar',
    component: ProductoEditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesProducto)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ProductoRoutingModule { }
