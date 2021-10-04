import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../models/category";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.css']
})
export class AdminCategoryEditComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              private router: Router, private activatedRoute: ActivatedRoute
  ) {
  }

  categoryId: string;
  category: Category;
  categoryForm: FormGroup;
  title: string;
  btnText: string;
  type: string;

  ngOnInit(): void {
    // id yi burdan yakalıyoruz
    this.categoryId = this.activatedRoute.snapshot.paramMap.get("id");

    if (this.categoryId == null) {
      this.title = "Kategori ekle";
      this.btnText = "Ekle";
      this.type = "add";
    } else {
      this.title = "Kategori Güncelleme";
      this.btnText = "Güncelle";
      this.type = "update";
      this.categoryService.getCategoryById(this.categoryId).subscribe(result => {
        this.category = result;
        //  htmlde update basınca dolu gelemsi için, silme işleminde tekrar çalısıyor onınıten dolayı oyuzden name? varsa dedik
        this.categoryForm?.controls?.name?.setValue(this.category?.name);
      })
    }

    this.categoryForm = new FormGroup({
      name: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      if (this.type == "add") {
        this.categoryService.addCategory(this.categoryForm.value)
          .subscribe(result => {
          console.log(result);
          // burayı kontrol et
          this.router.navigateByUrl("/admin");
        })

      } else {
        // formun içinde ki değeri almak önemli
        this.categoryService.updateCategory(this.categoryId,this.categoryForm.value)
          .subscribe(result=>{
          this.router.navigateByUrl("/admin");
        })

      }
    }
  }

}
