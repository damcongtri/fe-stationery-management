import { Component } from '@angular/core';

interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean; // biểu trị trạng thái thu gọn
}

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
    isSideNavCollapsed = false;
    screenWidth = 0;
    onToggLeSideNav(data: SideNavToggle): void {
        this.screenWidth = data.screenWidth;
        this.isSideNavCollapsed = data.collapsed;
    }
}
