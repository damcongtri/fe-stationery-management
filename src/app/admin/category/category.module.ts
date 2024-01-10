import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';


@NgModule({
  declarations: [
    CreateCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
