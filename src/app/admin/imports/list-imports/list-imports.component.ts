import { Component } from '@angular/core';
import { ImportService } from 'src/app/service/import/import.service';

@Component({
  selector: 'app-list-imports',
  templateUrl: './list-imports.component.html',
  styleUrls: ['./list-imports.component.scss']
})
export class ListImportsComponent {
  listImports: any[] = [];
  constructor(private importService: ImportService) { }
  ngOnInit(): void {
    this.importService.getImport().subscribe(
      (response) => {
        this.listImports = response.sort((a: any, b: any) => b.importDate.localeCompare(a.importDate));;
        // Xử lý phản hồi từ server nếu cần
      },
      error => {
        console.error('Error submitting data', error);
        // Xử lý lỗi nếu cần
      }
    );
  }
}
