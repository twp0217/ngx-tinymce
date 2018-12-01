import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgxTinymceModule } from "@twp0217/ngx-tinymce";

declare var require: any;
require("../assets/tinymce/langs/zh_CN.js");

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    NgxTinymceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
