import {Category} from "./category";

export class Product {
  // bu orospu ççocugu id de _id olacak yanı amk tum id lerini _id seklınde yaz kurtul
  _id:string;
  title:string;
  author:string;
  price:number;
  stock:number;
  picture:string;
  categoryBy:Category;
}
