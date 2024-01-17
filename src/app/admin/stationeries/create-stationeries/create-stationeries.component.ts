import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CategoryServiceService } from 'src/app/service/category-service.service';
import { StationeriesService } from 'src/app/service/stationeries.service';
import { SuppliersService } from 'src/app/service/suppliers.service';

@Component({
  selector: 'app-create-stationeries',
  templateUrl: './create-stationeries.component.html',
  styleUrls: ['./create-stationeries.component.scss']
})
export class CreateStationeriesComponent implements OnInit{
  public Editor = ClassicEditor;

  image: string= '';
  listSuppliers: any;
  listCategory:any;

  formData2 = new FormData();

  formData =  new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', Validators.required),
    unitPrice: new FormControl('', Validators.required),
    inventory: new FormControl('', Validators.required),
    supplierId: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('',Validators.required),
    fileUpload: new FormControl(File, Validators.required)
  });

  constructor(private service: StationeriesService, private router: Router, private serviceSuppliers: SuppliersService, private categoryService: CategoryServiceService) {
    this.f.fileUpload.errors = false
  }

  ngOnInit(): void {
    this.serviceSuppliers.getAll().subscribe((data)=>{
      this.listSuppliers = data;
    })
    this.categoryService.getCategory().subscribe((data)=>{
      this.listCategory = data;
    })
  }

  changeImage(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('')) {
      this.formData2.append('fileUpload', file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.image = reader.result as string;
            this.f.image.setErrors(null);
        };
    } else {
        this.image = '';
        this.f.image.setErrors({ 'fileType': true });
    }
}


  get f():any{
    return this.formData.controls;
  }

  onSubmit(){
    if (this.image === '') {
      this.f.fileUpload.errors = true;
    }
  
   
    // Lấy giá trị từ FormGroup
    const formValue = this.formData.value;

    // Thêm từng trường vào formData
    this.formData2.append('name', formValue.name as string);
    this.formData2.append('price', formValue.price as string); // Chuyển đổi số thành chuỗi
    this.formData2.append('unitPrice', formValue.unitPrice as string); // Chuyển đổi số thành chuỗi
    this.formData2.append('inventory', formValue.inventory as string); // Chuyển đổi số thành chuỗi
    this.formData2.append('supplierId', formValue.supplierId as string);
    this.formData2.append('categoryId', formValue.categoryId as string);
    this.formData2.append('description', formValue.description as string);      
    if (this.formData.valid) {
      this.service.insertStationeries(this.formData2).subscribe((data) => {
        if (data) {
          this.router.navigate(['/stationeries/list'])
        }
      })
    }
  }

}
  