import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PageModule} from "./pages/page.module";



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
