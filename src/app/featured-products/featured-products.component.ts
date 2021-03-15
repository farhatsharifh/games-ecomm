import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from '../products/product.model';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  featuredProducts: Product[] = [];
  private productsSub: Subscription;

  constructor(
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loadFeaturedProducts();
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
  }

  loadFeaturedProducts(){
    this.productService.getFeaturedProducts();
    this.productsSub = this.productService
      .getProductUpdateListener()
      .subscribe((productsData: { products: Product[] }) => {
        this.featuredProducts = productsData.products;
      });
  }

  viewAllProducts() {
    this.router.navigate(['allproducts']);
  }
}
