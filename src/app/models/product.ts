import {Category} from "./category";

export class Product {
  id:string;
  title:string;
  author:string;
  price:number;
  stock:number;
  picture:string;
  categoryBy:Category;
}
