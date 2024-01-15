import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/service/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.scss']
})
export class ListRolesComponent implements OnInit {
  roles: any = [];
  constructor(private roleService: RoleService, private route: Router) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.roleService.getList().subscribe(data => {
      this.roles = data;
    })
  }

  delete(id: string) {
    if (confirm('Are you sure you want to delete')) {
      this.roleService.delete(id).subscribe(() => {
        this.getRoles(),
          this.deleteSuccessful()
      });
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
