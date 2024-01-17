import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/env/env';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  private apiUrlSupplier = env.apiUrl;  // Đặt URL của API của bạn ở đây

   constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrlSupplier}/Supplier`);
  }

  insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrlSupplier}/Supplier`, data);
  }
  update(id:number, data:any):Observable<any>{
    return this.http.put<any>(`${this.apiUrlSupplier}/Supplier/${id}`, data)
  }

  getId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlSupplier}/Supplier/${id}`);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlSupplier}/Supplier/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Xảy ra lỗi ở phía client hoặc mạng
      console.error('An error occurred:', error.error.message);
    } else {
      // Lỗi trả về từ server
      console.error(`Server returned code ${error.status}, body was: ${error.error}`);
    }
    // Trả về một observable với thông điệp lỗi để component có thể xử lý
    return throwError('There is a foreign key to the Stationeries table');
  }
}
