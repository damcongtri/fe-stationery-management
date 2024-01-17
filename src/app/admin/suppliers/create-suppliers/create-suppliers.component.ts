import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuppliersService } from 'src/app/service/suppliers.service';

@Component({
  selector: 'app-create-suppliers',
  templateUrl: './create-suppliers.component.html',
  styleUrls: ['./create-suppliers.component.scss']
})
export class CreateSuppliersComponent implements OnInit{


  constructor(private service: SuppliersService, private router: Router) {}

  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contactInfo: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  get f():any{
    return this.formData.controls;
  }
  onSubmit(){
      this.service.insert(this.formData.value).subscribe((data)=>{
        this.router.navigate(['/suppliers/list']);
      })
  }


}
