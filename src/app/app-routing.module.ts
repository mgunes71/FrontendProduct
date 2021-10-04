import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {AdminHomeComponent} from "./pages/admin-home/admin-home.component";
import {AdminCategoryEditComponent} from "./pages/admin-category-edit/admin-category-edit.component";
import {AdminProductEditComponent} from "./pages/admin-product-edit/admin-product-edit.component";


// localhost/
const routes: Routes = [
  {
    path:"", component:MainLayoutComponent,
    children:[
      {
        path:"", component:HomeComponent
      }
    ]
  },
  {
    path:"admin", component:AdminLayoutComponent,
    children:[
      {
        path: "", component: AdminHomeComponent
      },
      {
        path:"category", component: AdminCategoryEditComponent
      },
      {
        path:"category/:id", component: AdminCategoryEditComponent
      },
      {
        path:"product", component: AdminProductEditComponent
      },
      {
        path:"product/:id", component: AdminProductEditComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
