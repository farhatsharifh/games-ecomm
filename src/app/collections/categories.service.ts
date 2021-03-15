import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Category } from './category.model';

const BACKENDURL = environment.apiUrl + "/categories/";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categories: Category[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories(){
    return this.http.get<{message: string, categories: any}>(BACKENDURL)
    .pipe(map((resData) => {
      return {
      categories: resData.categories.map(category => {
        return {
          id: category._id,
          name: category.name,
          title: category.title,
          imagePath: category.imagePath,
        };
      })
      };
    }))
  }

}
