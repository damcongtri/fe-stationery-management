import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ImportService } from 'src/app/service/import/import.service';
import { StationeriesService } from 'src/app/service/stationeries.service';

@Component({
  selector: 'app-creat-imports',
  templateUrl: './creat-imports.component.html',
  styleUrls: ['./creat-imports.component.scss']
})
export class CreatImportsComponent {
  stationeries: any = [];
  importDetailList: any = [];
  importForm = new FormGroup({
    importDate: new FormControl(new Date()),
  });

  importDetailForm = this.createImportDetailForm();

  constructor(private importService: ImportService, private stationery: StationeriesService, private router: Router) { }

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

  createImportDetailForm() {
    return new FormGroup({
      stationeryId: new FormControl(0, Validators.required),
      quantity: new FormControl(0, Validators.required)

    });
  }

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
      console.log(index);

      this.importDetailList.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.importForm.valid) {
      var dd: any = this.importForm.value;
      dd.importDetails = this.importDetailList
      // Gửi dữ liệu đến service của bạn
      this.importService.addImport(dd).subscribe(
        response => {
          this.router.navigate(['/imports/list']);
          console.log('Data submitted successfully', response);
          // Xử lý phản hồi từ server nếu cần
        },
        error => {
          console.error('Error submitting data', error);
          // Xử lý lỗi nếu cần
        }
      );
    }
  }
}

