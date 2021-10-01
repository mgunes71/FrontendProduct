import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,MatFormFieldModule,MatInputModule,
    MatPaginatorModule,MatTableModule
  ],
  exports: [MatToolbarModule, MatButtonModule, MatTabsModule,
    MatFormFieldModule,MatInputModule,MatPaginatorModule,MatTableModule]
})
export class MaterialModule {
}
