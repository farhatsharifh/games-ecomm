import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ALL_PRODUCTS } from 'src/app/dummy-products';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  allProducts = ALL_PRODUCTS;
  featuredProducts: Product[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadFeaturedProducts();
  }

  loadFeaturedProducts(){
    for (let i = 0; i < this.allProducts.length; i++) {
      if (this.allProducts[i].featured == true) {
        this.featuredProducts.push(this.allProducts[i]);
      }
    }
  }

  viewAllProducts() {
    this.router.navigate(['allproducts']);
  }
}
