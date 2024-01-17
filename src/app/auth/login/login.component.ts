import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private authService: AuthService, private router:Router){}

  ngOnInit(): void {

  }

  get f(): any {
    return this.formLogin.controls;
  }

  onSubmit() {
    this.authService.onLogin(this.formLogin.value).subscribe( res =>{
      console.log(res);
      sessionStorage.setItem('token_4fa1u', res.token);
      this.logInSuccessful();
      this.router.navigate(['/']);
    })
  }

  logInSuccessful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Login Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
