import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestDetailsRoutingModule } from './request-details-routing.module';
import { RequestDetailsComponent } from './request-details.component';
import { CreateResquestDetailsComponent } from './create-resquest-details/create-resquest-details.component';
import { ListResquestDetailsComponent } from './list-resquest-details/list-resquest-details.component';


@NgModule({
  declarations: [
    RequestDetailsComponent,
    CreateResquestDetailsComponent,
    ListResquestDetailsComponent
  ],
  imports: [
    CommonModule,
    RequestDetailsRoutingModule
  ]
})
export class RequestDetailsModule { }
