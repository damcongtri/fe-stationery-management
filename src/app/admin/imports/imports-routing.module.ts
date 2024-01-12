import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListImportsComponent } from './list-imports/list-imports.component';
import { CreatImportsComponent } from './creat-imports/creat-imports.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListImportsComponent
},
{
    path: 'create',
    component: CreatImportsComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportsRoutingModule { }
