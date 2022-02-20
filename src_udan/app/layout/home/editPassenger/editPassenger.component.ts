import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/api.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './editPassenger.component.html',
    styleUrls: ['./editPassenger.component.scss']
})

export class EditPassenger implements OnInit{

    @ViewChild ('f', {static: false}) f: NgForm;
    model: any = {};
    mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
    passport= "^[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]$";  
    mobNumber:string;
    isValidFormSubmitted = false;  
    baseUrl = environment.baseUrl;
    passngerForm: FormGroup;
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
     
  
     this.getEditForm();
      this.getPassengerClass();
      this.getVegRecipe()
      this.getNonVeg();
      //this.getSeat1A();
     // this.getSeat2A();
      this.getSeat();
      this.currentDate = new Date();
      this.arrivalData = new Date(this.currentDate);
      this.arrivalData.setHours(this.currentDate.getHours() + 9);
      this.arrivalData.setMinutes(this.currentDate.getMinutes() + 20);
      this.differentdate = (this.currentDate.getHours() - this.arrivalData.getHours() - 6);
      this.diMinutes = (this.arrivalData.getMinutes() - this.currentDate.getMinutes());
  
    }
    
  editPassengerData:any=[]
    getEditForm(){
      this.activateRoute.params.subscribe(data=> {
        this.passengerEditid = data.id
      })
      this.passengerEditid = (this.passengerEditid) ? (this.passengerEditid) : 0;
  
      if(this.passengerEditid > 0){
       this.http.get(this.baseUrl + 'AddPassenger/' + this.passengerEditid).subscribe(data=>{
         console.log('xxx', data)
         this.editPassengerData = data;
        this.f.control.patchValue({fname: this.editPassengerData.fname});
        this.f.control.patchValue({lname: this.editPassengerData.lname});
        this.f.control.patchValue({phone: this.editPassengerData.phone});
        this.f.control.patchValue({passClass: this.editPassengerData.passClass});
        this.f.control.patchValue({nonVegMeal: this.editPassengerData.nonVegMeal});
        this.f.control.patchValue({vegMeal: this.editPassengerData.vegMeal});
       })
      }
     
    }
  
    //passenger class list
    getPassengerClass() {
      this.http.get(this.baseUrl + 'passengerClass').subscribe(data => {
        this.passengerList = data;
      }, error => {
        console.log('something went wrong')
      })
    }
    // get vegetable select list
  
  
    getVegRecipe() {
      this.http.get(this.baseUrl + 'VegetableFood').subscribe(res => {
        this.VegetableFood = res
        let vegNameValue: any;
        for(let i=0; i<this.VegetableFood.length; i++){
          if(this.VegetableFood[i].id == this.VegetableFood[i].name){
            vegNameValue = this.VegetableFood[i].name
  
            console.log('bbnnb', vegNameValue)
          }
        }
      })
    }
    //get non vegetable select list
    getNonVeg() {
      this.http.get(this.baseUrl + 'NonVegatableFood').subscribe(res => {
        this.NonVegatableFood = res
      }, error => console.log('Error'))
    }
  
   //seat 1a 
   isChecked: any;
   isCheckedName: any;
  
   SeatList: any=[]
   seatarray=[];
   getSeat(){
    this.http.get(this.baseUrl + 'SeatList/').subscribe(res => {
      this.SeatList = res;
  
    })
  }
  onChange(evt){
    this.isChecked = !this.isChecked;
    this.isCheckedName = evt.target.id;
  }
  postPassnger:any=[]
    onSubmit(form: NgForm) {
      //console.log(this.passngerForm.value)
      if(this.passengerEditid > 0){
        let passdata1 = {
            "wheelchair": form.value.wheelchair == true ? 1 : 0,
            "child": form.value.child == true ? 1 : 0,
            "passClass": form.value.passClass,
            "fname": form.value.fname,
            "lname": form.value.lname,
            "phone": form.value.phone,
            "vegMeal": form.value.vegMeal,
            "nonVegMeal":  form.value.nonVegMeal,
            "passport": form.value.passport,
            "A1": form.value.A1 == true ? 'A1': '',
            "B1": form.value.B1 == true ? 'B1': '',
            "C1": form.value.C1 == true ? 'C1': '',
            "D1": form.value.D1 == true ? 'D1': '',
            "E1":  form.value.E1 == true ? 'E1': '',
            "F1": form.value.F1 == true ? 'F1': '',
            "A2": form.value.A2 == true ? 'A2': '',
            "B2": form.value.B2 == true ? 'B2': '',
            "C2": form.value.C2 == true ? 'C2': '',
            "D2": form.value.D2 == true ? 'D2': '',
            "E2": form.value.E2 == true ? 'E2': '',
            "F2": form.value.F2 == true ? 'F2': '',
            "A3": form.value.A3 == true ? 'A3': '',
            "B3": form.value.B3 == true ? 'B3': '',
            "C3": form.value.C3 == true ? 'C3': '',
            "D3": form.value.D3 == true ? 'D3': '',
            "E3": form.value.E3 == true ? 'E3': '',
            "F3": form.value.F3 == true ? 'F3': '',
            "A4": form.value.A4 == true ? 'A4': '',
            "B4": form.value.B4 == true ? 'B4': '',
            "C4": form.value.C4 == true ? 'C4': '',
            "D4": form.value.D4 == true ? 'D4': '',
            "E4": form.value.E4 == true ? 'E4': '',
            "F4": form.value.F4 == true ? 'F4': '',
            "A5": form.value.A5 == true ? 'A5': '',
            "B5": form.value.B5 == true ? 'B5': '',
            "C5": form.value.C5 == true ? 'C5': '',
            "D5": form.value.D5 == true ? 'D5': '',
            "E5": form.value.E5 == true ? 'E5': '',
            "F5": form.value.F5 == true ? 'F5': '',
            "A6": form.value.A6 == true ? 'A6': '',
            "B6": form.value.B6 == true ? 'B6': '',
            "C6": form.value.C6 == true ? 'C6': '',
            "D6": form.value.D6 == true ? 'D6': '',
            "E6": form.value.E6 == true ? 'E6': '',
            "F6": form.value.F6 == true ? 'F6': '',
            "A7": form.value.A7 == true ? 'A7': '',
            "B7": form.value.B7 == true ? 'B7': '',
            "C7": form.value.C7 == true ? 'C7': '',
            "D7": form.value.D7 == true ? 'D7': '',
            "E7": form.value.E7 == true ? 'E7': '',
            "F7": form.value.F7 == true ? 'F7': '',
            "A8": form.value.A8 == true ? 'A8': '',
            "B8": form.value.B8 == true ? 'B8': '',
            "C8": form.value.C8 == true ? 'C8': '',
            "D8": form.value.D8 == true ? 'D8': '',
            "E8": form.value.E8 == true ? 'E8': '',
            "F8": form.value.F8 == true ? 'F8': '',
            "A9": form.value.A9 == true ? 'A9': '',
            "B9": form.value.B9 == true ? 'B9': '',
            "C9": form.value.C9 == true ? 'C9': '',
            "D9": form.value.D9 == true ? 'D9': '',
            "E9": form.value.E9 == true ? 'E9': '',
            "F9": form.value.F9 == true ? 'F9': '',
            "A10": form.value.A10 == true ? 'A10': '',
            "B10": form.value.B10 == true ? 'B10': '',
            "C10": form.value.C10 == true ? 'C10': '',
            "D10": form.value.D10 == true ? 'D10': '',
            "E10": form.value.E10 == true ? 'E10': '',
            "F10":form.value.F10 == true ? 'F10': '',
           // "id": this.passengerEditid
        }
        this.service.getPassenger(passdata1).subscribe(res=>{
            if(res){
              this.postPassnger= res;
              this.router.navigate(['./home/user-book/list'])
             console.log(this.postPassnger)
            }
            
          })
      }else{
        let passdata1 = {
            "wheelchair": form.value.wheelchair == true ? 1 : 0,
            "child": form.value.child == true ? 1 : 0,
            "passClass": form.value.passClass,
            "fname": form.value.fname,
            "lname": form.value.lname,
            "phone": form.value.phone,
            "vegMeal": form.value.vegMeal,
            "nonVegMeal":  form.value.nonVegMeal,
            "passport": form.value.passport,
            "A1": form.value.A1 == true ? 'A1': '',
            "B1": form.value.B1 == true ? 'B1': '',
            "C1": form.value.C1 == true ? 'C1': '',
            "D1": form.value.D1 == true ? 'D1': '',
            "E1":  form.value.E1 == true ? 'E1': '',
            "F1": form.value.F1 == true ? 'F1': '',
            "A2": form.value.A2 == true ? 'A2': '',
            "B2": form.value.B2 == true ? 'B2': '',
            "C2": form.value.C2 == true ? 'C2': '',
            "D2": form.value.D2 == true ? 'D2': '',
            "E2": form.value.E2 == true ? 'E2': '',
            "F2": form.value.F2 == true ? 'F2': '',
            "A3": form.value.A3 == true ? 'A3': '',
            "B3": form.value.B3 == true ? 'B3': '',
            "C3": form.value.C3 == true ? 'C3': '',
            "D3": form.value.D3 == true ? 'D3': '',
            "E3": form.value.E3 == true ? 'E3': '',
            "F3": form.value.F3 == true ? 'F3': '',
            "A4": form.value.A4 == true ? 'A4': '',
            "B4": form.value.B4 == true ? 'B4': '',
            "C4": form.value.C4 == true ? 'C4': '',
            "D4": form.value.D4 == true ? 'D4': '',
            "E4": form.value.E4 == true ? 'E4': '',
            "F4": form.value.F4 == true ? 'F4': '',
            "A5": form.value.A5 == true ? 'A5': '',
            "B5": form.value.B5 == true ? 'B5': '',
            "C5": form.value.C5 == true ? 'C5': '',
            "D5": form.value.D5 == true ? 'D5': '',
            "E5": form.value.E5 == true ? 'E5': '',
            "F5": form.value.F5 == true ? 'F5': '',
            "A6": form.value.A6 == true ? 'A6': '',
            "B6": form.value.B6 == true ? 'B6': '',
            "C6": form.value.C6 == true ? 'C6': '',
            "D6": form.value.D6 == true ? 'D6': '',
            "E6": form.value.E6 == true ? 'E6': '',
            "F6": form.value.F6 == true ? 'F6': '',
            "A7": form.value.A7 == true ? 'A7': '',
            "B7": form.value.B7 == true ? 'B7': '',
            "C7": form.value.C7 == true ? 'C7': '',
            "D7": form.value.D7 == true ? 'D7': '',
            "E7": form.value.E7 == true ? 'E7': '',
            "F7": form.value.F7 == true ? 'F7': '',
            "A8": form.value.A8 == true ? 'A8': '',
            "B8": form.value.B8 == true ? 'B8': '',
            "C8": form.value.C8 == true ? 'C8': '',
            "D8": form.value.D8 == true ? 'D8': '',
            "E8": form.value.E8 == true ? 'E8': '',
            "F8": form.value.F8 == true ? 'F8': '',
            "A9": form.value.A9 == true ? 'A9': '',
            "B9": form.value.B9 == true ? 'B9': '',
            "C9": form.value.C9 == true ? 'C9': '',
            "D9": form.value.D9 == true ? 'D9': '',
            "E9": form.value.E9 == true ? 'E9': '',
            "F9": form.value.F9 == true ? 'F9': '',
            "A10": form.value.A10 == true ? 'A10': '',
            "B10": form.value.B10 == true ? 'B10': '',
            "C10": form.value.C10 == true ? 'C10': '',
            "D10": form.value.D10 == true ? 'D10': '',
            "E10": form.value.E10 == true ? 'E10': '',
            "F10":form.value.F10 == true ? 'F10': '',
           // "id": form.value.id
        }
      
      
          this.service.getPassenger(passdata1).subscribe(res=>{
            if(res){
              this.postPassnger= res;
              this.router.navigate(['./home/user-book/list'])
             console.log(this.postPassnger)
            }
            
          })
      }
      console.log('cnmncvnmvc', form.value);
      
  
      
    }
  
}