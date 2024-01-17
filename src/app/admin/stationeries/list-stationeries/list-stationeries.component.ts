import { Component, OnInit } from '@angular/core';
import { StationeriesService } from 'src/app/service/stationeries.service';
import { env } from 'src/env/env';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-stationeries',
  templateUrl: './list-stationeries.component.html',
  styleUrls: ['./list-stationeries.component.scss']
})


export class ListStationeriesComponent implements OnInit{

  constructor(private stationeries: StationeriesService) { }
  listStationeries:any = []
  
  ngOnInit(): void {
   this.getAll();
  }

  getAll(){
    this.stationeries.getStationeries().subscribe((data)=>{
      data.map((e:any) => {
        return e.image = env.BEUrl+ e.image
      });
      this.listStationeries = data;
    })
  }

  delete (id:number) {
    if(confirm('Are you sure you want to delete it ? ')){
      this.stationeries.delete(id).subscribe((data)=>{
        this.getAll(), this.deleteSuccessful();
      });
    }
  }

  deleteSuccessful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Delete Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
