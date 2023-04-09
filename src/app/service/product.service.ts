import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cart } from '../card';
import { Product } from './../Model/product';

const urlAPI = ' http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  lengthCart = new Subject<number>();

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    this.http.get<Cart[]>(`${urlAPI}/cart`).subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.get<any>(`${urlAPI}/product`);
  }

  getShirt(): Observable<Product[]> {
    return this.http.get<Product[]>(`${urlAPI}/shirts`);

  }

  getHoodie(): Observable<Product[]> {
    return this.http.get<Product[]>(`${urlAPI}/Hoodies`);

  }

  getPant(): Observable<Product[]> {
    return this.http.get<Product[]>(`${urlAPI}/Pants`);

  }

  getPolo(): Observable<Product[]> {
    return this.http.get<Product[]>(`${urlAPI}/Polo`);

  }

  getDeatil(id: any): Observable<any> {
    return this.http.get<any>(`${urlAPI}/product/${id}`);
  }


  filterProduct(id: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${urlAPI}/product?qnt=${id}`);

  }

  getAllCate(): Observable<Product[]> {
    return this.http.get<Product[]>(`${urlAPI}/danhSach`);
  }


  addPro(data: any): Observable<any> {
    return this.http.post<any>(`${urlAPI}/product`, data)
  }

  deletePro(id: number): Observable<any> {
    return this.http.delete<any>(`${urlAPI}/product/${id}`)
  }

  editPro(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${urlAPI}/product/${id}`, data)
  }


  getCart(): Observable<any> {
    this.http.get<Cart[]>(`${urlAPI}/cart`).subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.get<any>(`${urlAPI}/cart`)
  }

  putCart(data: Cart): Observable<Cart> {
    return this.http.put<Cart>(`${urlAPI}/cart/${data.id}`, data)
  }
  // thêm sản phẩm vào trong cart
  postCart(data: Cart): Observable<Cart> {
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.post<Cart>(`${urlAPI}/cart`, data)
  }
}

