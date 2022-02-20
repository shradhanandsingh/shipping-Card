import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{

    LoginForm: FormGroup;
    constructor(private fb: FormBuilder){}

    ngOnInit(){
        this.LoginForm = this.fb.group({
            username: [''],
            password: ['']
        })
    }

    onSubmit(){
        console.log(this.LoginForm.value)
    }
}