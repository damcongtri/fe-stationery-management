import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private apiUrlCategory = 'http://172.16.0.33:5000/api';  // Đặt URL của API của bạn ở đây

  constructor(private http: HttpClient) {
  }

  getCategory(): Observable<any> {
    return this.http.get<any>(`${this.apiUrlCategory}/Category`);
  }

  insertCategory(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrlCategory}/Category`, data);
  }
  updateCategory(id:number, data:any):Observable<any>{
    return this.http.put<any>(`${this.apiUrlCategory}/Category/${id}`, data)
  }

  getId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlCategory}/Category/${id}`);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlCategory}/Category/${id}`);
  }
}
