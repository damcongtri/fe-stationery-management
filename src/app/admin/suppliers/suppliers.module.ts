import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { CreateSuppliersComponent } from './create-suppliers/create-suppliers.component';
import { ListSuppliersComponent } from './list-suppliers/list-suppliers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';


@NgModule({
  declarations: [
    CreateSuppliersComponent,
    ListSuppliersComponent,
    EditSupplierComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SuppliersModule { }
