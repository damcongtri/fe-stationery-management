import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPoductComponent } from './list-poduct/list-poduct.component';
import { CreatePoductComponent } from './create-poduct/create-poduct.component';

const routes: Routes = [
    {
        path: 'list',
        component: ListPoductComponent
    },
    {
        path: 'create',
        component: CreatePoductComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
