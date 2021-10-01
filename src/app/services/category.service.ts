import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Category} from "../models/category";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  apiUrl: string = `${environment.baseUrl}`;



  getCategories() {
    return this.httpClient.get<any>(this.apiUrl + "categories")
      .pipe(map(result => result.data));
  }

  getCategoryById(id:string){
    return this.httpClient.get<any>(this.apiUrl + "category/" + id)
      .pipe(map(result => result.data));
  }

  addCategory(category: Category) {
    return this.httpClient.post<any>(this.apiUrl + "category", category);
  }

  updateCategory(id:string,category:Category){
    // _id olarak html den çekiyoruz
    return this.httpClient.put<any>(this.apiUrl + "category/" + id,category);
  }
  deleteCategory(id:string){
    return this.httpClient.delete<any>(this.apiUrl + "category/" + id);
  }
}
