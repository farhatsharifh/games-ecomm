import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { environment } from "../../environments/environment";
import { Product } from './product.model';

const BACKENDURL = environment.apiUrl + "/products/";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [];
  private productsUpdated = new Subject<{products: Product[], productsCount: number}>();
  private product: Product;

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(category: string){
    this.http.get<{message: string, products: any, maxProducts: number}>(BACKENDURL + category)
      .pipe(map((resData) => {
        return {
        products: resData.products.map(product => {
          return {
            id: product._id,
            title: product.title,
            price: product.price,
            description: product.description,
            imagePath: product.imagePath,
            detail: product.detail,
            category: product.category,
            featured: product.featured
          };
        }),
        maxProducts: resData.maxProducts};
      }))
      .subscribe((transformedProductsData) => {
        this.products = transformedProductsData.products;
        this.productsUpdated.next({
          products: [...this.products],
          productsCount: transformedProductsData.maxProducts
        });
      });
  }

  getPostUpdateListener(){
    return this.productsUpdated.asObservable();
  }

}
