import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ImportsRoutingModule } from './imports-routing.module';
import { CreatImportsComponent } from './creat-imports/creat-imports.component';
import { ListImportsComponent } from './list-imports/list-imports.component';


@NgModule({
  declarations: [
    CreatImportsComponent,
    ListImportsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ImportsRoutingModule
  ]
})
export class ImportsModule { }
