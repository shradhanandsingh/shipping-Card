import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
    selector: 'app-view-book',
    templateUrl: './viewBooking.component.html',
    styleUrls: ['./viewBooking.component.scss']
})

export class ViewBookingComponent implements OnInit{
    breakpoint: number;

    passId:any;
    passengerName: any;
    passNumber: any;
    reserve: any;
    seatcategories: any;
    seatMapping: any;
    passport: any;
    constructor(private service: ApiService, private router: Router, private activateRoute: ActivatedRoute){}

    ngOnInit(){
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;

        this.activateRoute.params.subscribe(params=>{
            this.passId = params.id
        });

        this.getViews(this.passId)
       
    }
getpassngerData: any;
    getViews(passId){
        this.service.getpassengerView(passId).subscribe(res =>{
            this.getpassngerData= res;

            console.log('nnnn', this.getpassngerData)

            this.passengerName = this.getpassngerData.fname + ' ' + this.getpassngerData.lname;
            this.passNumber = this.getpassngerData.phone;
            this.reserve = this.getpassngerData.child == 1 ? 'Child' : this.getpassngerData.wheelchair == 1 ? 'Wheel Chair' : '';
            this.seatcategories = this.getpassngerData.passClass;
            this.seatMapping = this.getpassngerData.A1 ? 'A1': this.getpassngerData.B1 ? 'B1' :this.getpassngerData.C1 ? 'C1':this.getpassngerData.D1 ? 'D1':
            this.getpassngerData.E1?'E1':this.getpassngerData.F1?'F1':this.getpassngerData.A2?'A2':this.getpassngerData.B2?'B2':this.getpassngerData.C2?'C2':this.getpassngerData.D2?'D2':
            this.getpassngerData.E2?'E2':this.getpassngerData.F2?'F2':this.getpassngerData.A3?'A3':this.getpassngerData.B3?'B3':this.getpassngerData.C3?'C3':this.getpassngerData.D3?'D3':
            this.getpassngerData.E3?'E3':this.getpassngerData.F3?'F3':this.getpassngerData.A4?'A4':this.getpassngerData.B4?'B4':this.getpassngerData.C4?'C4':this.getpassngerData.D4?'D4':
            this.getpassngerData.E4?'E4':this.getpassngerData.F4?'F4':this.getpassngerData.A5?'A5':this.getpassngerData.B5?'B5':this.getpassngerData.C5?'C5':this.getpassngerData.D5?'D5':
            this.getpassngerData.E5?'E5':this.getpassngerData.F5?'F5':this.getpassngerData.A6?'A6':this.getpassngerData.B6?'B6':this.getpassngerData.C6?'C6':this.getpassngerData.D6?'D6':
            this.getpassngerData.E6?'E6':this.getpassngerData.F6?'F6':this.getpassngerData.A7?'A7':this.getpassngerData.B7?'B7':this.getpassngerData.C7?'C7':this.getpassngerData.D7?'D7':
            this.getpassngerData.E7?'E7':this.getpassngerData.F7?'F7':this.getpassngerData.A8?'A8':this.getpassngerData.B8?'B8':this.getpassngerData.C8?'C8':this.getpassngerData.D8?'D8':
            this.getpassngerData.E8?'E8':this.getpassngerData.F8?'F8':this.getpassngerData.A9?'A9':this.getpassngerData.B9?'B9':this.getpassngerData.C9?'C9':this.getpassngerData.D9?'D9':
            this.getpassngerData.E9?'E9':this.getpassngerData.F9?'F9':this.getpassngerData.A10?'A10':this.getpassngerData.B10?'B10':this.getpassngerData.C10?'C10':this.getpassngerData.D10?'D10':
            this.getpassngerData.E10?'E10':this.getpassngerData.F10?'F10':'No Seat Choose'
            this.passport=this.getpassngerData.passport;
        })
    }

 
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
      }
}