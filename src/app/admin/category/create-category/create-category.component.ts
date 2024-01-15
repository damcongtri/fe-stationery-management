import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit{

  formData =  new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
  })

  constructor(private categoryService: CategoryServiceService, private router: Router) {}

  ngOnInit(): void {
  }

  get f():any{
    return this.formData.controls;
  }

  onSubmit(){
    console.log(this.formData.value);
      this.categoryService.insertCategory(this.formData.value).subscribe((data)=>{
        console.log(data);  
        this.router.navigate(['/category/list']);
      })
  }
}
