import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
    { path: '',canActivate:[authGuard], loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
    // { path: '', redirectTo: 'admin', pathMatch: 'full' }, // Chuyển hướng trang gốc về '/admin'
    { path: 'login', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
