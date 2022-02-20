import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getFlightList(){
    return this.http.get<any>(this.url + 'flightlist').pipe(
      map((res: any)=>{
        return res;
      })
    )
  }
  //
  // To Get Employee Details For Single Record Using Id
 getFlightById(empid) {
  return this.http.get(`${this.url}flightlist/${empid}`);
  }

  getPassenger(data: any){
    return this.http.post<any>(this.url + 'AddPassenger', data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getPassengerList(){
    return this.http.get<any>(this.url + 'AddPassenger').pipe(map((res: any)=>{
      return res.reverse();
    }))
  }

  getpassengerView(passengerId){
    return this.http.get(`${this.url}AddPassenger/${passengerId}`);
  }
 
}
