import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRequetsComponent } from './list-requets/list-requets.component';
import { CreateRequetsComponent } from './create-requets/create-requets.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListRequetsComponent
},
{
    path: 'create',
    component: CreateRequetsComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
