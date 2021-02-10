import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularMaterialModule } from '../ecomm-modules/angular-material.module';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: 'allproducts', component: ProductListComponent }
]

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
