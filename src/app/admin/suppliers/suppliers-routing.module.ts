import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSuppliersComponent } from './create-suppliers/create-suppliers.component';
import { ListSuppliersComponent } from './list-suppliers/list-suppliers.component';
import { SuppliersComponent } from './suppliers.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListSuppliersComponent
},
{
    path: 'create',
    component: CreateSuppliersComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
