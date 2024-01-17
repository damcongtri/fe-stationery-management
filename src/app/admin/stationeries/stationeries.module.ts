import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationeriesRoutingModule } from './stationeries-routing.module';
import { StationeriesComponent } from './stationeries.component';
import { CreateStationeriesComponent } from './create-stationeries/create-stationeries.component';
import { ListStationeriesComponent } from './list-stationeries/list-stationeries.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditStationeriesComponent } from './edit-stationeries/edit-stationeries.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StationeriesComponent,
    CreateStationeriesComponent,
    ListStationeriesComponent,
    EditStationeriesComponent
  ],
  imports: [
    CommonModule,
    StationeriesRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StationeriesModule { }
