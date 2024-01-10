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
import { RolesComponent } from './roles/roles.component';// cần import đúng module cần sử dụng nếu không xẽ không sử dụng được

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
        RolesComponent, //ng g c sublevel-menu --inline-template --inline-style --flat true
    ],
    imports: [CommonModule, AdminRoutingModule, CdkMenuModule, CarouselModule],
})
export class AdminModule { }
// --inline-template: Tùy chọn này cho biết rằng một phần template của thành phần sẽ được viết trực tiếp trong tệp TypeScript của thành phần (thay vì tạo một tệp HTML riêng). Điều này làm giảm số lượng tệp bên ngoài và phù hợp cho các thành phần nhỏ hoặc đơn giản.

//--inline-style: Tùy chọn này tương tự như --inline-template, nhưng áp dụng cho phần style (CSS) của thành phần. Nếu bạn sử dụng --inline-style, phần CSS của thành phần cũng sẽ được viết trực tiếp trong tệp TypeScript của thành phần.

//--flat true: Tùy chọn này đặt thành phần mới được tạo mà không tạo thư mục riêng. Nghĩa là tất cả các tệp liên quan đến thành phần sẽ được đặt trong thư mục hiện tại, chứ không phải trong một thư mục con có tên giống với tên của thành phần (ở đây là "sublevel-menu").
