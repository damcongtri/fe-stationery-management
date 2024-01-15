import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { CreateRolesComponent } from './create-roles/create-roles.component';
import { UpdateRolesComponent } from './update-roles/update-roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListRolesComponent,
    CreateRolesComponent,
    UpdateRolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RolesModule { }
