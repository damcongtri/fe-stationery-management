import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { CreateSuppliersComponent } from './supplier/create-suppliers/create-suppliers.component';// tạo thành phần lớp phủ// thường được sử dụng để tạo các dropdowns, popup, tooltips, context menus
// import { CdkMenuModule } from '@angular/cdk/menu';


@NgModule({
    declarations: [
        AppComponent,
     
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        OverlayModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        
        // CdkMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
