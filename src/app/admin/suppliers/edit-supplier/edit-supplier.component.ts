import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppliersService } from 'src/app/service/suppliers.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent implements OnInit{

  constructor(private service: SuppliersService, private router: Router, private routes: ActivatedRoute) {}

  id_: any;
  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contactInfo: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.id_ = this.routes.snapshot.params['id']
    console.log(this.id_)
    this.service.getId(this.id_).subscribe((data) => {
      this.formData.patchValue(data)
    })
  }

  get f():any{
    return this.formData.controls;
  }
  onSubmit(){
      this.service.update(this.id_,this.formData.value).subscribe(()=>{
        this.router.navigate(['/suppliers/list']);
      })
  }
}
