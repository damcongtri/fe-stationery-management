import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env  } from 'src/env/env';

@Injectable({
  providedIn: 'root'
})
export class StationeriesService {

  private apiUrlStationery = env.apiUrl;  // Đặt URL của API của bạn ở đây

   constructor(private http: HttpClient) {
  }

  getStationeries(): Observable<any> {
    return this.http.get<any>(`${this.apiUrlStationery}/Stationery`);
  }

  insertStationeries(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrlStationery}/Stationery`, data);
  }
  updateStationeries(id:number, data:any):Observable<any>{
    return this.http.put<any>(`${this.apiUrlStationery}/Stationery/${id}`, data)
  }

  getId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlStationery}/Stationery/${id}`);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlStationery}/Stationery/${id}`);
  }
}
