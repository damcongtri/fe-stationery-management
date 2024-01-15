import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit  {
 
  listCategory:any =[];
  id:any;
  constructor(private categoryService: CategoryServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }

    getAll(){
      this.categoryService.getCategory().subscribe(data =>{
        console.log(data);
        
        this.listCategory= data;
      })
    }

    delete (id:number) {
      this.categoryService.delete(id).subscribe(()=>{
        console.log("xoa");
        this.getAll();
      })
    }

}


