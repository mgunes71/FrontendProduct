import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from "../layouts/main-layout/main-layout.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "../app-routing.module";
import {MaterialModule} from "../modules/material/material.module";
import {HeaderComponent} from "../nav/header/header.component";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [MainLayoutComponent,HomeComponent,HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ]
})
export class PageModule { }
