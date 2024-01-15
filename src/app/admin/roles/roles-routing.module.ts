import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { CreateRolesComponent } from './create-roles/create-roles.component';
import { UpdateRolesComponent } from './update-roles/update-roles.component';

const routes: Routes = [
    {
        path: 'list',
        component: ListRolesComponent
    },
    {
        path: 'create',
        component: CreateRolesComponent
    },
    {
        path: 'update/:id',
        component: UpdateRolesComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RolesRoutingModule { }
