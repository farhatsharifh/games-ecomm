import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  featuredTitle = "Shop Your Favorites";
  private productsSub: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.loadList();
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
  }

  loadList() {
    var categoryName = this.activatedRoute.snapshot.paramMap.get('categoryName');
    if (!categoryName) {
      categoryName = 'allproducts';
    }
    this.productService.getAllProducts(categoryName);
    this.productsSub = this.productService
    .getPostUpdateListener()
    .subscribe((productsData: { products: Product[] }) => {
      this.productList = productsData.products;
    });
  }

}
