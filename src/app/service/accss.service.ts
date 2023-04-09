import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlAPI = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class AccssService {

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${urlAPI}/account`, data)
  }

  checkout(data: any): Observable<any> {
    return this.http.post<any>(`${urlAPI}/checkout`, data)
  }

  login(data: any): Observable<any> {
    return this.http.get<any>(`${urlAPI}/account?email=${data.email}&password=${data.password}`)
  }
}
