import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiServices } from "src/app/services/apiServices";
@Component({
    templateUrl:'./register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
    registerForm: FormGroup;

    constructor(private fb:FormBuilder, private router:Router, private apiService: ApiServices){}
    ngOnInit(): void {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
        })
    }

    get namerequired(){
        return this.registerForm.get('name')
    }
    get mobilequired(){
        return this.registerForm.get('mobile')
    }
    get emailquired(){
        return this.registerForm.get('email')
    }
    get passwordrequired(){
        return this.registerForm.get('password')
    }

    onSubmit(){
        let addUser = {
            name: this.registerForm.value.name,
            mobile: this.registerForm.value.mobile,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password
        }
        this.apiService.signupUser(addUser).subscribe(data=>{
            this.router.navigate(['./login'])
        }, error => {
            console.log(error)
            this.router.navigate(['./register'])
        })
    }
}