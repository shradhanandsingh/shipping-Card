import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/api.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {
  baseUrl = environment.baseUrl;
  flightId: string;
  editId: string;
  passengerEditid: number = 0;
  getflightData: any;
  flightImg: any;
  flightName: any;
  flightNo: any;
  dplace: any;
  arvPlace: any;
  currentDate: Date;
  arrivalData: Date;
  differentdate: number;
  diMinutes: number;
  priceValue: any;
  passengerList: any = [];
  VegetableFood: any = []
  NonVegatableFood: any = []
  bookSeat:any=[]
  bookSeat2: any=[]
  bookSeat3: any=[]
  bookSeat4: any=[]
  bookSeat5: any=[]
  bookSeat6: any=[]
  bookSeat7: any=[]
  bookSeat8: any=[]
  bookSeat9: any=[]
  bookSeat10: any=[]


  constructor(private fb: FormBuilder, private router: Router, private activateRoute: ActivatedRoute,
    private service: ApiService, private http: HttpClient) {
    this.activateRoute.params.subscribe(params => {
      this.flightId = params.id
      this.editId = params.id
      console.log('ccxmxcb', this.flightId)

      console.log('snsnsns', this.editId)
    })
  }

  ngOnInit() {
  

    this.getFlightById(this.flightId);
  
  
    //this.getSeat1A();
   // this.getSeat2A();
   // this.getSeat();
    this.currentDate = new Date();
    this.arrivalData = new Date(this.currentDate);
    this.arrivalData.setHours(this.currentDate.getHours() + 9);
    this.arrivalData.setMinutes(this.currentDate.getMinutes() + 20);
    this.differentdate = (this.currentDate.getHours() - this.arrivalData.getHours() - 6);
    this.diMinutes = (this.arrivalData.getMinutes() - this.currentDate.getMinutes());

  }
  

  getFlightById(flightId) {
    this.service.getFlightById(flightId).subscribe(res => {
      this.getflightData = res;
      console.log(this.getflightData)
      this.flightImg = this.getflightData.images
      this.flightName = this.getflightData.airline
      this.flightNo = this.getflightData.flightNo
      this.dplace = this.getflightData.departPlace
      this.arvPlace = this.getflightData.arrivalPlace
      this.priceValue = this.getflightData.price
    })
  }
  //passenger class list

  goToAddPassenger(){
    this.router.navigate(['./home/user-book/add'])
  }



}