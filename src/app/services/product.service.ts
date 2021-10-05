import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  apiUrl: string = `${environment.baseUrl}`;

  getProduct() {
    return this.httpClient.get<any>(this.apiUrl + "products")
      .pipe(map(result => result.data
      ));
  }

  getProductById(id:string){
    return this.httpClient.get<any>(this.apiUrl + "product/"+ id)
      .pipe(map(result=> result.data));
  }

  addProduct(product: Product) {
    return this.httpClient.post<any>(this.apiUrl + "product", product);
  }

  updateProduct(id:string, product:Product){
    return this.httpClient.put<any>(this.apiUrl + "product/" + id, product)
  }

  deleteProduct(id:string){
    return this.httpClient.delete<any>(this.apiUrl + "product/" + id)
  }

  saveProductImage(image) {
    return this.httpClient.post<any>(`${this.apiUrl}product/saveImage`, image);
  }
}
