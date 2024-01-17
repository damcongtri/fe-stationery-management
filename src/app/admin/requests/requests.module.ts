import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';
import { CreateRequetsComponent } from './create-requets/create-requets.component';
import { ListRequetsComponent } from './list-requets/list-requets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestsComponent,
    CreateRequetsComponent,
    ListRequetsComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RequestsModule { }
