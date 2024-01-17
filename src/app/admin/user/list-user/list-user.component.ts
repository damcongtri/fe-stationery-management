import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { env } from 'src/env/env';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  defaultUrl = env.BEUrl;
  users: any = [];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getList().subscribe(data => {
      console.log(data);

      this.users = data;
    });
  }

  delete(id: string) {
    if (confirm('Are you sure you want to delete')) {
      this.userService.delete(id).subscribe(
        response => {
          this.getUsers(),
          this.deleteSuccessful();
        },
        err => {
          alert("Không thể xóa");
        }
      );
    }
  }

  deleteSuccessful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Delete Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
