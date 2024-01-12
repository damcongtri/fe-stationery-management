import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListImportDetailsComponent } from './list-import-details/list-import-details.component';
import { CreateImportDetailsComponent } from './create-import-details/create-import-details.component';
const routes: Routes = [
  {
    path: 'list',
    component: ListImportDetailsComponent
},
{
    path: 'create',
    component: CreateImportDetailsComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportDetailsRoutingModule { }
