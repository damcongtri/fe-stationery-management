import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-create-roles',
  templateUrl: './create-roles.component.html',
  styleUrls: ['./create-roles.component.scss']
})
export class CreateRolesComponent implements OnInit {

  formData = new FormGroup({
    roleName: new FormControl('', [Validators.required]),
    thresholdAmountPerMonth: new FormControl('',[Validators.required,Validators.min(1)])
  })

  constructor(private roleService: RoleService, private router: Router) {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.roleService.add(this.formData.value).subscribe(role => {
      this.router.navigate(['/roles/list']);
    })
  }

  get f(): any {
    return this.formData.controls;
  }
}
