import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productId;

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadProductDetails();
  }

  loadProductDetails() {
    // this.productId = this.activatedRoute.snapshot.paramMap.get('productId')
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('productId')) {
        this.productId = paramMap.get('productId');
        this.productService.getProduct(this.productId)
        .subscribe((resData) => {
          this.product = {
            id: resData._id,
            title: resData.title,
            price: resData.price,
            description: resData.description,
            imagePath: resData.imagePath,
            detail: resData.detail,
            category: resData.category,
            featured: resData.featured
            };
        });
      }
    });
  }

}
