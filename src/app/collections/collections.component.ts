import { Component, OnInit } from '@angular/core';

import { Category } from './category.model';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  CategoryList: Category[] = [];

  constructor(
    private categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAllCategories()
    .subscribe((categoriesData) => {
      this.CategoryList = categoriesData.categories;
    });
  }

}
