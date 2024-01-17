import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import the library
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerListComponent } from './banner-management/banner-list/banner-list.component';
import { BannerCreateComponent } from './banner-management/banner-create/banner-create.component';
import { BannerEditComponent } from './banner-management/banner-edit/banner-edit.component';
import { FeedbackListComponent } from './feedback-and-comments/feedback-list/feedback-list.component';
import { CommentListComponent } from './feedback-and-comments/comment-list/comment-list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { HeaderComponent } from './header/header.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { RolesComponent } from './roles/roles.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ImportsComponent } from './imports/imports.component';
import { ImportDetailsComponent } from './import-details/import-details.component';
import { HttpClientModule } from '@angular/common/http';
// cần import đúng module cần sử dụng nếu không xẽ không sử dụng được

@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        BannerListComponent,
        BannerCreateComponent,
        BannerEditComponent,
        FeedbackListComponent,
        CommentListComponent,
        SidenavComponent,
        BodyComponent,
        SublevelMenuComponent,
        CustomersListComponent,
        CustomersComponent,
        HeaderComponent,
        CategoryComponent,
        UserComponent,
        RolesComponent,
        ImportsComponent,
        ImportDetailsComponent
      
    ],
    imports: [CommonModule, AdminRoutingModule, CdkMenuModule, CarouselModule],
})
export class AdminModule { }

