import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListResquestDetailsComponent } from './list-resquest-details/list-resquest-details.component';
import { CreateResquestDetailsComponent } from './create-resquest-details/create-resquest-details.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListResquestDetailsComponent
},
{
    path: 'create',
    component: CreateResquestDetailsComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestDetailsRoutingModule { }
