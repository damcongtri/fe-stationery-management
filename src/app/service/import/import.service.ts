import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/env/env'
const url = env.apiUrl + '/Import';
@Injectable({
  providedIn: 'root'
})
export class ImportService {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  public getImport(): Observable<any> {
    return this.http.get<any>(`${url}`);
  }

  public getImportId(importId: number): Observable<any> {
    return this.http.get<any>(`${url}/${importId}`);
  }

  public addImport(obj: any): Observable<any> {
    return this.http.post<any>(`${url}`, obj);
  }

  public updateImport(obj: any): Observable<any> {
    return this.http.put<any>(`${url}`, obj);
  }

  public deleteImport(importId: number): Observable<void> {
    return this.http.delete<void>(`${url}/${importId}`);
  }
}
