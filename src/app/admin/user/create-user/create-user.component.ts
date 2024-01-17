import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  image: string = '';
  roles: any = [];
  superiors: any = [];
  formData2 = new FormData();

  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passWord: new FormControl('', [Validators.required, Validators.minLength(6)]),
    superiorId: new FormControl(),
    roleId: new FormControl('', [Validators.required]),
    image: new FormControl('', Validators.required)
  })

  constructor(private roleService: RoleService, private userService: UserService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.getRoles();
    this.getSuperior();
  }

  getRoles() {
    this.roleService.getList().subscribe(data => {
      this.roles = data;
    })
  }

  getSuperior() {
    this.userService.getList().subscribe(data => {
      this.superiors = data;
    });
  }

  onSubmit() {
    if (this.image === '') {
      this.f.imageFile.errors = true;
    }
    // Lấy giá trị từ FormGroup
    const formValue = this.formData.value;

    this.formData2.append('name', formValue.name as string);
    this.formData2.append('email', formValue.email as string);
    this.formData2.append('passWord', formValue.passWord as string);
    this.formData2.append('superiorId', formValue.superiorId as string);
    this.formData2.append('roleId', formValue.roleId as string);

    if (this.formData.valid) {
      this.userService.add(this.formData2).subscribe((data) => {
        if (data) {
          this.createSuccessful();
          this.router.navigate(['/user/list'])
        }
      })
    }
  }

  get f(): any {
    return this.formData.controls;
  }

  changeImage(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('')) {
      this.formData2.append('fileUpload', file);
      console.log(file);
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
  createSuccessful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Create Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
