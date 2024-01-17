import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { env } from 'src/env/env';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  image: string = '';
  roles: any = [];
  superiors: any = [];
  curUser: any;
  id: string = '';
  formData2 = new FormData();
  defaultUrl = env.BEUrl;

  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    superiorId: new FormControl(),
    roleId: new FormControl('', [Validators.required]),
    image: new FormControl('', Validators.required)
  })

  constructor(private roleService: RoleService, private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.f.image.errors = false
  }

  ngOnInit(): void {
    this.getRoles();
    this.getSuperior();
    this.id = this.route.snapshot.params['id'];
    this.getUserById(this.id);
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

  getUserById(id: string) {
    this.userService.getById(id).subscribe(data => {
      this.curUser = data;
      console.log(this.curUser);
      this.formData.patchValue(data);
      this.image = this.defaultUrl + this.curUser.image;
    })
  }

  onSubmit() {
    if (this.image === '') {
      this.f.imageFile.errors = true;
    }
    // Lấy giá trị từ FormGroup
    const formValue = this.formData.value;

    this.formData2.append('name', formValue.name as string);
    this.formData2.append('email', formValue.email as string);
    this.formData2.append('superiorId', formValue.superiorId as string);
    this.formData2.append('roleId', formValue.roleId as string);

    if (this.formData.valid) {
      this.userService.update(this.formData2,this.id).subscribe((data) => {
        if (data) {
          this.updateSuccessful();
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
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(this.image);
        this.image = reader.result as string;
      };
    }
  }
  updateSuccessful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Update Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
