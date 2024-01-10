import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Languages, notifications, userItems } from './header-data';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() collapsed_Body = false;
    @Input() screenWidth_Body = 0;
    canShowSearchAsOVerlay = false;
    selectedLanguage: any;
    languages = Languages;
    notificaTions = notifications;
    UserItems = userItems;


    constructor() { }
    @HostListener('window:resize', ['$event'])// ắng tai cửa sổ trình duyệt. nếu thay đổi là tuwjd động gọi đến onResize
    onResize(event: any) { //onResize phương thức có sẵn để sử lý sự kiện cửa sổ trình duyệt
        console.log(window.innerWidth);// lấy chiều rộng hiện tại cảu trình duyệt
        this.checkCanShowSearchAsOverlay(window.innerWidth);
    }
    ngOnInit(): void { // tự động
        this.checkCanShowSearchAsOverlay(window.innerWidth);
        console.log(window.innerWidth);
        this.selectedLanguage = this.languages[0]; // tức là lấy cái ảnh đầu tiên gán cho biến selectedLanguage
        console.log(this.languages);

    }
    getHeadClass(): string {
        let styleClass = '';
        if (this.collapsed_Body && this.screenWidth_Body > 768) {
            styleClass = 'head-trimmed';
        } else {
            styleClass = 'head-md-screen';
        }
        return styleClass;

    }
    checkCanShowSearchAsOverlay(innerWidth: number): void { // chuyền cái chiều rộng mình lấy được vào
        if (innerWidth < 845) {
            this.canShowSearchAsOVerlay = true;
        } else {
            this.canShowSearchAsOVerlay = false;

        }

    }
}
