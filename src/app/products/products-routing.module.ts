import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";


const routes: Routes = [
  { path: 'allproducts', component: ProductListComponent },
  { path: 'category/:categoryName', component: ProductListComponent },
  { path: 'product/:productId', component: ProductDetailComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProductsRoutingModule {}
