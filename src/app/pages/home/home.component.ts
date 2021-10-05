import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService:ProductService, private route:ActivatedRoute) { }
  products:Product[];
  categoryId:string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get("id")
      if (this.categoryId){
          this.productService.getProductByCategoryId(this.categoryId).subscribe(result=>{
            this.products = result;
          })
      }
      else {
        this.productService.getProduct().subscribe(result=>{
          this.products = result;
        })
      }
    })



    this.productService.getProduct().subscribe(result=>{
      this.products = result;
    });
  }

}
