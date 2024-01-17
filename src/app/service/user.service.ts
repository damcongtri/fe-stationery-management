import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { env } from 'src/env/env'
const url = env.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get<any>(`${url}/User`);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${url}/User/${id}`)
  }

  add(data: any): Observable<any> {
    return this.http.post<any>(`${url}/User`, data);
  }

  update(data:any,id: string): Observable<any> {
    return this.http.put<any>(`${url}/User/${id}`, data)
  }

  delete(id:string): Observable<boolean> {
    return this.http.delete<boolean>(`${url}/User/${id}`)
  }


}
