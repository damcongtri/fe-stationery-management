import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportsRoutingModule } from './imports-routing.module';
import { CreatImportsComponent } from './creat-imports/creat-imports.component';
import { ListImportsComponent } from './list-imports/list-imports.component';


@NgModule({
  declarations: [
    CreatImportsComponent,
    ListImportsComponent
  ],
  imports: [
    CommonModule,
    ImportsRoutingModule
  ]
})
export class ImportsModule { }
