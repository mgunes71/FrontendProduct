import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {CategoryService} from "../../services/category.service";
import {Product} from "../../models/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../models/category";
import {map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
              private productService: ProductService, private categoryService: CategoryService) {
  }


  formData: FormData = null;
  productId: string;
  product: Product;
  productForm: FormGroup;
  title: string;
  btnText: string;
  type: string;
  categories: Category[];

  upload(files) {
    let fileData = files.target.files[0];
    this.formData = new FormData();
    // picture backend de api.router dan geliyor key
    this.formData.append("picture", fileData);
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
    })
    // burda ki id route da yazdığımız id /:id
    this.productId = this.route.snapshot.paramMap.get("id");
    // id null sa yoksa yani ekleme işlemi
    if (this.productId == null) {
      this.title = "Ürün Ekleme";
      this.btnText = "Ekle";
      this.type = "add";
    } else {
      //  id varsa update islemi

    }

    this.productForm = new FormGroup({
      title: new FormControl("", Validators.required),
      author: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      stock: new FormControl("", Validators.required),
      picture: new FormControl(""),
      categoryBy: new FormControl("")
    });


  }

  displayCategoryName(category){
    if (category){
      return category.name;
    }
    return null;
  }

  // yani iç içe içe calback olduğu için map ve mergeMap beklete beklete yazdık
  onSubmit() {
    if (this.productForm.valid) {
      if (this.type == "add") {
        // resultu çekti ve set value ile picture form data ya ekledi mergemap servisten çekti
        this.productService.saveProductImage(this.formData).pipe(map(result => {
              // backend de saveImage yerinde key olarak url verdik buyüzden res.url
              this.productForm.controls.picture.setValue(result.url);
            },
          ), mergeMap(() => this.productService.addProduct(this.productForm.value))
        ).subscribe(result => {
          this.router.navigateByUrl("/admin");
        });

      } else {
        //  update işlemi
      }

    }
  }

}
