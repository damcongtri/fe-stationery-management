import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListPoductComponent } from './list-poduct/list-poduct.component';
import { CreatePoductComponent } from './create-poduct/create-poduct.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    ProductsComponent,
    ListPoductComponent,
    CreatePoductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CKEditorModule
  ]
})
export class ProductsModule { }
