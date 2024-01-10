import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerCreateComponent } from './banner-management/banner-create/banner-create.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Chuyển hướng ngay lập tức đến dashboard
            { path: '', component: DashboardComponent },
            {
                path: 'product',
                loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'category',
                loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
            },
            {
                path: 'user',
                loadChildren: () => import('./user/user.module').then(m => m.UserModule)
            },
            {
                path: 'roles',
                loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)
            },
            {
                path: 'orders',
                loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
            },
            { path: 'banner', component: BannerCreateComponent },
            // Các tuyến đường khác của admin module
        ],
    },
];
// -----------------------------------tao thề xẽ học lại phần này , bug nhiều dã man kinh khủng---------------------------------

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
