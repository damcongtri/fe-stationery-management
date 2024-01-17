import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/env/env'

const url = env.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get<any>(`${url}/Role`)
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${url}/Role/${id}`)
  }

  add(data: any): Observable<any> {
    return this.http.post<any>(`${url}/Role`, data);
  }

  update(data: any, id: string): Observable<any> {
    return this.http.put<any>(`${url}/Role/${id}`, data)
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${url}/Role/${id}`)
  }

}
