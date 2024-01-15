import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
    // { path: '', redirectTo: 'admin', pathMatch: 'full' }, // Chuyển hướng trang gốc về '/admin'
    // { path: '', loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
