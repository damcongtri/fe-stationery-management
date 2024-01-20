import { Component } from '@angular/core';
import { RequestService } from 'src/app/service/request/request.service';
import Swal from 'sweetalert2';
export enum RequestStatus {
  Pending = 1,
  Approved = 2,
  Rejected = 3,
  Cancel = 4
}
@Component({
  selector: 'app-list-requets',
  templateUrl: './list-requets.component.html',
  styleUrls: ['./list-requets.component.scss']
})
export class ListRequetsComponent {
  RequestStatus = RequestStatus;
  listRequest: any[] = [];
  constructor(private requestService: RequestService) { }
  ngOnInit(): void {
    this.requestService.getRequests().subscribe(
      (response) => {
        this.listRequest = response.sort((a: any, b: any) => b.requestDate.localeCompare(a.requestDate));;
        // Xử lý phản hồi từ server nếu cần
      },
      error => {
        console.error('Error submitting data', error);
        // Xử lý lỗi nếu cần
      }
    );
  }

  updateStatus(requestId: number, status: RequestStatus) {
    this.requestService.confirmRequest({ requestId, status }).subscribe(
      (response) => {
        if (response) {
          this.requestService.getRequests().subscribe(
            (response) => {
              this.listRequest = response.sort((a: any, b: any) => b.requestDate.localeCompare(a.requestDate));
              this.successful();
              // Xử lý phản hồi từ server nếu cần
            },
            error => {
              console.error('Error submitting data', error);
              // Xử lý lỗi nếu cần
            }
          );
        }
        // Xử lý phản hồi từ server nếu cần
      },
      error => {
        console.error('Error submitting data', error);
        // Xử lý lỗi nếu cần
      })
  }

  statusToString(status: RequestStatus): string {
    switch (status) {
      case RequestStatus.Pending:
        return 'Pending';
      case RequestStatus.Approved:
        return 'Approved';
      case RequestStatus.Rejected:
        return 'Rejected';
      case RequestStatus.Cancel:
        return 'Cancel';
      default:
        throw new Error('Unknown status');
    }
  }
  successful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Done',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
