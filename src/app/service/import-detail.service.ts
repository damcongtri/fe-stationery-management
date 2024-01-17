import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const apiImportDetail = "http://172.16.0.33:5000/api";

@Injectable({
  providedIn: 'root'
})
export class ImportDetailService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  public getImportDetail():Observable<any>{
    return this.http.get<any>(`${apiImportDetail}`);
  }

  public getImportDetailId(importDetailId : number): Observable<any>{
    return this.http.get<any>(`${apiImportDetail}/${importDetailId}`);
  }

  public addImportDetail(obj : any):Observable<any>{
    return this.http.post<any>(`${apiImportDetail}`, obj);
  }

  public updateImportDetail(obj : any):Observable<any>{
    return this.http.put<any>(`${apiImportDetail}`, obj);
  }

  public deleteImportDetail(importDetailId : number):Observable<void>{
    return this.http.delete<void>(`${apiImportDetail}/${importDetailId}`);
  }


}
