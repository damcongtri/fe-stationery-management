import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationeriesService {

  private apiUrlCategory = 'http://172.16.0.33:5000/api';  // Đặt URL của API của bạn ở đây

   constructor(private http: HttpClient) {
  }

  getStationeries(): Observable<any> {
    return this.http.get<any>(`${this.apiUrlCategory}/Stationeries`);
  }

  insertStationeries(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrlCategory}/Stationeries`, data);
  }
  updateStationeries(id:number, data:any):Observable<any>{
    return this.http.put<any>(`${this.apiUrlCategory}/Stationeries/${id}`, data)
  }

  getId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlCategory}/Stationeries/${id}`);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlCategory}/Stationeries/${id}`);
  }
}
