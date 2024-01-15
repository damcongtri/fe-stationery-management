import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit{

  constructor(private categoryService: CategoryServiceService, private router: Router,private routers: ActivatedRoute) {}
  _id: any;
  formData =  new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
  })  

  ngOnInit(): void {
    this._id = this.routers.snapshot.params['id']
    console.log(this._id)
    this.categoryService.getId(this._id).subscribe((data) => {
      this.formData.patchValue(data)
    })
  }

  get f():any{
    return this.formData.controls;
  }
  onSubmit(){
    console.log(this.formData.value);
      this.categoryService.updateCategory(this._id ,this.formData.value).subscribe((data)=>{
        console.log(data);  
        this.router.navigate(['/category/list']);
      })
  }


}
