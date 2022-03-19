import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiServices } from "src/app/services/apiServices";

@Component({
    templateUrl: './login.component.html',
    styleUrls:['./login.component.scss']
    
})
export class LoginComponent implements OnInit{

    loginForm:FormGroup;
    constructor(private fb:FormBuilder, private router: Router, private apiService: ApiServices){}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: [''],
            password: ['']
        })
    }

    onSubmit(){
        this.apiService.loginUser().subscribe(res => {
            const user = res.find((a:any)=> {
                return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
            })

            if(user){
                alert('Login Successfully');
                this.router.navigate(['./restaurent']);
                localStorage.setItem("token", "xvjvjvxzjvjjcgsgjgjgsjgj.kjdkdhdhkd?lljjlhkkh")
            }
        })
    }
}