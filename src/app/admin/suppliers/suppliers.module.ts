import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { CreateSuppliersComponent } from './create-suppliers/create-suppliers.component';
import { ListSuppliersComponent } from './list-suppliers/list-suppliers.component';


@NgModule({
  declarations: [
    CreateSuppliersComponent,
    ListSuppliersComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ]
})
export class SuppliersModule { }