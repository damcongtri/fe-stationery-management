import { Component, OnInit } from '@angular/core';
import { SuppliersService } from 'src/app/service/suppliers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-suppliers',
  templateUrl: './list-suppliers.component.html',
  styleUrls: ['./list-suppliers.component.scss']
})
export class ListSuppliersComponent implements OnInit{

  listSuppliers: any;
  constructor(private service: SuppliersService) { }
  _id:any;
  suppliers: any;
  ngOnInit(): void {
   this.getSuppliers();
  }
  getSuppliers() {
    this.service.getAll().subscribe((data) => {
      this.listSuppliers = data;
    })
  } 

  getId(){
    this.service.getId(this._id).subscribe((data)=>{
      this.suppliers = data;
    })
  }

  delete(id: any) {
    if(confirm('Are you sure you want to delete it')){
      this.service.delete(id).subscribe(
        response => { this.getSuppliers(), this.deleteSuccessful;},
        err => {
          alert(err);
        }
        
        )
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
