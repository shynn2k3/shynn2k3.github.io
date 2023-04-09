import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlAPI = ' http://localhost:3000/product';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${urlAPI}`);
  }
}
