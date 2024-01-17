import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportDetailsRoutingModule } from './import-details-routing.module';
import { CreateImportDetailsComponent } from './create-import-details/create-import-details.component';
import { ListImportDetailsComponent } from './list-import-details/list-import-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateImportDetailsComponent,
    ListImportDetailsComponent
  ],
  imports: [
    CommonModule,
    ImportDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ImportDetailsModule { }
