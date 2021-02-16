import { Component, OnInit } from '@angular/core';

import { ALL_CATEGORIES } from './dummy-categories';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  allCategories = ALL_CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
