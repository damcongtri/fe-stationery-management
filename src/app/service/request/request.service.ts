import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/env/env'
const url = env.apiUrl + '/Request';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  public getRequests(): Observable<any> {
    return this.http.get<any>(`${url}`);
  }

  public getRequestId(requestId: number): Observable<any> {
    return this.http.get<any>(`${url}/${requestId}`);
  }

  public getMineRequest(): Observable<any> {
    return this.http.get<any>(`${url}/GetMineRequest`);
  }

  public createRequest(obj: any): Observable<any> {
    return this.http.post<any>(`${url}/create`, obj);
  }
  public confirmRequest(obj: any): Observable<any> {
    return this.http.post<any>(`${url}/confirm`, obj);
  }
  public cancelRequest(obj: any): Observable<any> {
    return this.http.post<any>(`${url}/cancel`, obj);
  }


}
