import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RequestService } from 'src/app/service/request/request.service';
import { RequestStatus } from '../requests/list-requets/list-requets.component';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    RequestStatus = RequestStatus;
    listRequest: any[] = [];
    constructor(private requestService: RequestService) { }
    ngOnInit(): void {
        this.requestService.getMineRequest().subscribe(
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
                    this.requestService.getMineRequest().subscribe(
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

}
