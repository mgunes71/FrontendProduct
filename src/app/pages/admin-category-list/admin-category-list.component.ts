import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from "../../models/category";
import {MatPaginator} from "@angular/material/paginator";
import {CategoryService} from "../../services/category.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";


@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService,private router:Router) {
  }

  categories: Category[];
  dataSource;
  displayedColumns: string[] = ['number', 'name', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    // categorileri indexe göre sıralayıp yanına no verdik no:1 gibi
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;

      this.categories.forEach((category, index) => {
        this.categories[index]["number"] = index + 1;
      });

      this.dataSource = new MatTableDataSource<Category>(
        this.categories);

      this.dataSource.paginator = this.paginator;
    })
  }

    delete(id: string) {

    this.categoryService.deleteCategory(id).subscribe(result => {

       if (result.status = "success") {
        alert("Silme İşlemi Başarılı")

        this.router.navigateByUrl("/admin");

      }
      else {
        alert("silme işlemi hatalı")
      }
    });

  }

}
