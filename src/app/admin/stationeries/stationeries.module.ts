import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationeriesRoutingModule } from './stationeries-routing.module';
import { StationeriesComponent } from './stationeries.component';
import { CreateStationeriesComponent } from './create-stationeries/create-stationeries.component';
import { ListStationeriesComponent } from './list-stationeries/list-stationeries.component';


@NgModule({
  declarations: [
    StationeriesComponent,
    CreateStationeriesComponent,
    ListStationeriesComponent
  ],
  imports: [
    CommonModule,
    StationeriesRoutingModule
  ]
})
export class StationeriesModule { }
