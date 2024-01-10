import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { FooterComponent } from './components/Layout/footer/footer.component';
import { HeaderComponent } from './components/Layout/header/header.component';
import { MainComponent } from './components/Layout/main/main.component';
import { HomeComponent } from './components/Pages/home/home.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
