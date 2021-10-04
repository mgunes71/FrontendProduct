import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl:string = `${environment.baseUrl}`;

  constructor(private httpClient:HttpClient) { }

  addProduct(product:Product){
    return this.httpClient.post<any>(this.apiUrl+"product",product);
  }

  saveProductImage(image){
    return this.httpClient.post<any>(`${this.apiUrl}product/saveImage`,image);
  }
}
