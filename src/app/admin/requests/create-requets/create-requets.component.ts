import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImportService } from 'src/app/service/import/import.service';
import { RequestService } from 'src/app/service/request/request.service';
import { StationeriesService } from 'src/app/service/stationeries.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-requets',
  templateUrl: './create-requets.component.html',
  styleUrls: ['./create-requets.component.scss']
})
export class CreateRequetsComponent {
  stationeries: any = [];
  importDetailList: any = [];

  importDetailForm = new FormGroup({
    stationeryId: new FormControl(0, Validators.required),
    quantity: new FormControl(0, Validators.required)

  });

  constructor(private requestService: RequestService, private stationery: StationeriesService,private router: Router) { }

  ngOnInit(): void {
    this.stationery.getStationeries().subscribe(
      response => {
        this.stationeries = response
        // Xử lý phản hồi từ server nếu cần
      },
      error => {
        console.error('Error submitting data', error);
        // Xử lý lỗi nếu cần
      }
    );
  }

  // get importDetails() {
  //   return this.importForm.get('importDetails') as FormArray;
  // }

  // createImportDetailForm() {
  //   return new FormGroup({
  //     stationeryId: new FormControl(0, Validators.required),
  //     quantity: new FormControl(0, Validators.required)

  //   });
  // }

  addImportDetail() {
    if (this.importDetailForm.valid) {
      let index = this.importDetailList.findIndex((item: any) => item.stationeryId === this.importDetailForm.value.stationeryId);
      if (index !== -1) {
        // Nếu stationeryId đã tồn tại, cộng dồn quantity
        this.importDetailList[index].quantity += this.importDetailForm.value.quantity;
      } else {
        // Nếu stationeryId chưa tồn tại, thêm mới vào danh sách
        this.importDetailList.push(this.importDetailForm.value);
      }
    }
  }


  removeImportDetail(index: number) {
    if (index >= 0 && index < this.importDetailList.length) {

      this.importDetailList.splice(index, 1);;
    }
  }

  onSubmit() {

    var dd: any = {};
    dd.stationeries = this.importDetailList
    // Gửi dữ liệu đến service của bạn
    this.requestService.createRequest(dd).subscribe(
      response => {
        this.successful();
        this.router.navigate(['/']);
        console.log('Data submitted successfully', response);
        // Xử lý phản hồi từ server nếu cần
      },
      error => {
        console.error('Error submitting data', error);
        // Xử lý lỗi nếu cần
      }
    );

  }

  
  successful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Create Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
