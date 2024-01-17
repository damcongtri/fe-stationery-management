import { Component, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImportDetailService } from 'src/app/service/import-detail.service';

@Component({
  selector: 'app-create-import-details',
  templateUrl: './create-import-details.component.html',
  styleUrls: ['./create-import-details.component.scss']
})
export class CreateImportDetailsComponent {

  constructor(private importDetailService: ImportDetailService, private router: Router){}

  formData =  new FormGroup({
    product: new FormControl(),
    quantity: new FormControl('', [Validators.required, Validators.min(1)])
  })

  onSubmit(): void{
    this.importDetailService.addImportDetail(this.formData.value).subscribe((data)=>{
      if(data[0]){
        this.router.navigate(['/']);
      } else{
          
      }
      
    })
}
  
  get f():any{
    return this.formData.controls;
  }
}
