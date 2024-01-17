import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImportDetailService } from 'src/app/service/import-detail.service';

@Component({
  selector: 'app-list-import-details',
  templateUrl: './list-import-details.component.html',
  styleUrls: ['./list-import-details.component.scss']
})
export class ListImportDetailsComponent implements OnInit{

  importDetails : any;

  constructor(private importDetailService: ImportDetailService){}

  ngOnInit(): void {
    this.getImportDetail();
  }

  public getImportDetail(): void{
    this.importDetailService.getImportDetail().subscribe(
      (data) => {
        console.log(data);
        
      }
    );
        
   }

   public getImportDetailId(): void{
    console.log("not oke");    
   }
}
