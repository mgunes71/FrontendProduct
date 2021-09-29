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
import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  declarations: [MainLayoutComponent, HomeComponent, HeaderComponent, AdminLayoutComponent, AdminHomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    // declarations kısmında ki complara Approuting uygulanıyor
    AppRoutingModule,
    MaterialModule
  ]
})
export class PageModule {
}
