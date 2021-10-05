import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  categories:Category[];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(result=>{
      this.categories = result;
    });
  }

}
