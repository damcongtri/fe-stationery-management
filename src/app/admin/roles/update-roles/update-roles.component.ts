import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from 'src/app/service/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-roles',
  templateUrl: './update-roles.component.html',
  styleUrls: ['./update-roles.component.scss']
})
export class UpdateRolesComponent implements OnInit {
  id: string = "";
  formData = new FormGroup({
    roleName: new FormControl('', [Validators.required]),
    thresholdAmountPerMonth: new FormControl('',[Validators.required,Validators.min(1)])
  })

  constructor(private route: ActivatedRoute, private roleService: RoleService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.roleService.getById(this.id).subscribe(data => {
      this.formData.patchValue(data);
    })
  }

  onSubmit() {
    this.roleService.update(this.formData.value, this.id).subscribe(role => {
      this.editSuccessful();
      this.router.navigate(['/roles/list']);
    })
  }

  editSuccessful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Update Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }

  get f(): any {
    return this.formData.controls;
  }
}
