import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class ApiServices {

    baseUrl = environment.baseUrl;
    constructor(private http: HttpClient){}

    postRestuarentData(data:any){
        return this.http.post<any>(this.baseUrl + 'restuarentUser', data).pipe(map((res:any)=>{
            return res
        }))
    }
    getRestuarentData(){
        return this.http.get<any>(this.baseUrl + 'restuarentUser').pipe(map((res:any)=>{
            return res;
        }))
    }

    updateRestuarent(data:any, id:number){
        return this.http.put<any>(this.baseUrl+'restuarentUser/'+id, data).pipe(map((res:any)=>{
            return res;
        }))
    }

    deleteRestuarent(id:number){
        return this.http.delete<any>(this.baseUrl+'restuarentUser/'+id).pipe(map((res:any)=>{
            return res;
        }))
    }
    //
    signupUser(data:any){
        return this.http.post<any>(this.baseUrl + 'register', data).pipe(map((res:any)=>{
            return res;
        }))
    }
    loginUser(){
        return this.http.get<any>(this.baseUrl + 'register').pipe(map((res:any)=>{
            return res;
        }))
    }
}