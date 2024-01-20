import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerCreateComponent } from './banner-management/banner-create/banner-create.component';
const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            // { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Chuyển hướng ngay lập tức đến dashboard
            { path: '', component: DashboardComponent },

            {
                path: 'category',
                loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
            },
            {
                path: 'suppliers',
                loadChildren: () => import('./suppliers/suppliers.module').then(m => m.SuppliersModule)
            },
            {
                path: 'stationeries',
                loadChildren: () => import('./stationeries/stationeries.module').then(m => m.StationeriesModule)
            },
            {
                path: 'imports',
                loadChildren: () => import('./imports/imports.module').then(m => m.ImportsModule)
            },
            // {
            //     path: 'import-details',
            //     loadChildren: () => import('./import-details/import-details.module').then(m => m.ImportDetailsModule)
            // },
            {
                path: 'requests',
                loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule)
            },
            {
                path: 'request-details',
                loadChildren: () => import('./request-details/request-details.module').then(m => m.RequestDetailsModule)
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


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
