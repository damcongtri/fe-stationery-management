import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  constructor(private categoryService: CategoryServiceService) {}

  listCategory:any =[];
  ngOnInit(): void {
    // Gọi các phương thức API từ service ở đây
    this.categoryService.getCategory().subscribe(data => {
         this.listCategory = data;
    });
}
}
