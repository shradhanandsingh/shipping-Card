import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-passenger',
    templateUrl: './passengerAdd.component.html',
    styleUrls: ['./passengerAdd.component.scss']
})

export class PassengerComponent implements OnInit{
    toppingList: any[] = [
        { id:1,name:'South Indian Delight (INR 400)'}, 
        {id:2,name:'Chicken Laziz with Paratha (INR 500)'}, 
        {id:3,name:'Panner Vegetable Roll (400)'},
        {id:4,name:'Pepperoni'}, 
        {id:5,name:'Sausage'},
        {id:6,name:'Tomato'}
    ];
    
    PassengerClasslist: any[] = [
        { id:1, name: 'Economic'},
        { id: 2, name: 'Business'},
        { id: 3, name: 'First Class'}
    ]
    
        expandedIndex = 0;
        FoodForm: FormGroup;
    
        UserForm: FormGroup;
        ChildForm: FormGroup;
    
    
        constructor(private fb: FormBuilder){
            
        }
    
        ngOnInit(){
    
            this.UserForm = this.fb.group({
                userArrayAllData: this.fb.array([]),
                childArrayAllData: this.fb.array([]),
                food: [''],
                shop: ['']
             });
         
            //  this.ChildForm = new FormGroup({
            //     cfname: new FormControl(''),
            //     clname: new FormControl(''),
            //     cphone: new FormControl(''),
            //     cemail: new FormControl(''),
            //     cgender: new FormControl(''),
            //     cpassengerClass: new FormControl(''),
            //     childArrayAllData: this.fb.array([])
            //  })
    
        }
    
        onSubmit(){
            console.log(this.UserForm.value);
    
            this.UserForm.reset();
        }
    
       
    
        // add form filed
    
        adultArrayData() : FormArray {
            return this.UserForm.get("userArrayAllData") as FormArray
          }
           
          newAdultArrayData(): FormGroup {
            return this.fb.group({
                fname: ['', [Validators.required]],
                lname: ['', [Validators.required]],
                phone: ['', [Validators.required]],
                email: ['', [Validators.required]],
                gender: ['', [Validators.required]],
                passengerClass: ['', [Validators.required]],
                passport:[''],
                address: ['', [Validators.required]]
            })
          }
           
          addAdult() {
            this.adultArrayData().push(this.newAdultArrayData());
          }
    
          // child array
    
          childArrayData() : FormArray {
            return this.UserForm.get("childArrayAllData") as FormArray
          }
           
          newChildArrayData(): FormGroup {
            return this.fb.group({
                cfname: [''],
                clname: [''],
                cphone: [''],
                cemail: [''],
                cgender: [''],
                cpassengerClass: [''],
                cpassport: [''],
                caddress:['']
            })
          }
           
          addChild() {
            this.childArrayData().push(this.newChildArrayData());
          }
    
     }