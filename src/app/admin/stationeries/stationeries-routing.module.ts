import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStationeriesComponent } from './list-stationeries/list-stationeries.component';
import { CreateStationeriesComponent } from './create-stationeries/create-stationeries.component';
import { EditStationeriesComponent } from './edit-stationeries/edit-stationeries.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListStationeriesComponent
  },
  {
    path: 'create',
    component: CreateStationeriesComponent
  },
  {
    path: 'edit/:id',
    component: EditStationeriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationeriesRoutingModule { }
