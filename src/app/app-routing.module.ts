import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import { HomeComponent } from './layout/home/home.component';

const routesApp: Routes = [
  {
    path: 'producto/lista',
    component: ProductoListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routesApp)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
