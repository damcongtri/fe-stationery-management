import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/env/env'

const url = env.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  onLogin(data: any): Observable<any> {
    return this.http.post<any>(`${url}/Auth/login`, data);
  }
}
