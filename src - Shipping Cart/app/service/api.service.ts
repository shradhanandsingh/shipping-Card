import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl= environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllData(){
    return this.http.get<any>(this.baseUrl + 'productList').pipe(map((res:any)=>{
      return res
    }))
  }

  getProductDescription(productId:any){
    return this.http.get(`${this.baseUrl}productList/${productId}`);
  }
}
