import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService:ProductService, private route:ActivatedRoute) { }
  // new product her elemanda hata veriyor stock,picture vs hepsine stock? yapmak yerine
  product : Product = new Product();
  productId:string;

  ngOnInit(): void {
    // url in sadece id si değisiyorsa paramMap url yenılıyorsa kendnı basaka yer için snapshot
    this.productId = this.route.snapshot.paramMap.get("id");

    this.productService.getProductById(this.productId).subscribe(result=>{
      this.product = result;
    })
  }

}
