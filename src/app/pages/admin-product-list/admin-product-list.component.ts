import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  constructor(private productService: ProductService, private router:Router) {
  }

  products: Product[];
  dataSource;
  displayedColumns: string[] = ["number", "picture", "title", "author", "price", "stock", "categoryBy", "action"]


  @ViewChild(MatPaginator, {static: true}) paginator:MatPaginator
  ngOnInit(): void {
    this.productService.getProduct().subscribe(result => {
      console.log(result);
      this.products = result;
      this.products.forEach((product, index) => {
        this.products[index]["number"] = index + 1;
      });



      this.dataSource = new MatTableDataSource<Product>(this.products)
      this.dataSource.paginator = this.paginator;
    })
  }

  delete(product_id:string){
    this.productService.deleteProduct(product_id).subscribe(result=>{
      if (result.status="success"){
        let product = this.products.filter(x=>x._id==product_id)[0];
        let index = this.products.indexOf(product);
        // 1 yazdığımız için bır tane silcek
        this.products.splice(index,1);
        this.dataSource = new MatTableDataSource<Product>(this.products);
        this.router.navigateByUrl("/admin");

      }
      else {
        alert("Sİlme işlemi hatalı");
      }
    })
  }

}
