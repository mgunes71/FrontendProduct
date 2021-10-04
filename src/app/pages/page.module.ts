import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//layouts
import {MainLayoutComponent} from "../layouts/main-layout/main-layout.component";
import {AdminLayoutComponent} from "../layouts/admin-layout/admin-layout.component";
//components
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "../app-routing.module";
import {MaterialModule} from "../modules/material/material.module";

import {HeaderComponent} from "../nav/header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminCategoryEditComponent} from './admin-category-edit/admin-category-edit.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminCategoryListComponent} from './admin-category-list/admin-category-list.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';




@NgModule({
  declarations: [MainLayoutComponent, HomeComponent, HeaderComponent, AdminLayoutComponent, AdminHomeComponent, AdminCategoryEditComponent, AdminCategoryListComponent, AdminProductEditComponent],
  imports: [
    CommonModule,
    BrowserModule,
    // declarations kısmında ki complara Approuting uygulanıyor
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,

  ]
})
export class PageModule {
}
