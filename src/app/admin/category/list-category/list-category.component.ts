import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/service/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit  {
 
  listCategory:any =[];
  constructor(private categoryService: CategoryServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }

    getAll(){
      this.categoryService.getCategory().subscribe(data =>{
        this.listCategory= data;
      })
    }
    delete (id:number) {
      if(confirm("Are you sure to delete it?")){
        this.categoryService.delete(id).subscribe(
          response => { this.getAll(), this.deleteSuccessful;},
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


