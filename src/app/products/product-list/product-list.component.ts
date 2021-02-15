import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../product.model';
import { ALL_PRODUCTS } from 'src/app/dummy-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // allProducts: Product[];
  allProducts = ALL_PRODUCTS;
  productList = ALL_PRODUCTS;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.loadList();
  }

  loadList() {
    const categoryName = this.activatedRoute.snapshot.paramMap.get('categoryName');
    if (categoryName) {
      this.productList = [];
      for (let i = 0; i < this.allProducts.length; i++) {
        if (this.allProducts[i].category === categoryName) {
          this.productList.push(this.allProducts[i]);
        }
      }
    }
  }

/*   loadList(category: string) {
    console.log("1*** , ", 'startfunc')
    // this.route.reload();
    this.productList = [];
    console.log("2*** , ", this.productList)
    for (let i = 0; i < this.allProducts.length; i++) {
      if (this.allProducts[i].category === category) {
        this.productList.push(this.allProducts[i]);
      }
    }
    console.log("3*** , ", 'endfunc')
    this.router.navigate(['/category', category]);
  } */

}
