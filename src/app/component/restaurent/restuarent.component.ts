import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiServices } from "src/app/services/apiServices";

@Component({
    templateUrl:'./restuarent.component.html',
    styleUrls: ['./restuarent.component.scss']
})

export class RestuarentComponent implements OnInit{
    isOpenModal:boolean=false;

    restaurentForm: FormGroup;
    restuarentUserList=[];
    restuarentId:any;

    constructor(private fb: FormBuilder, private apiservices: ApiServices, private router: Router){}

    ngOnInit(): void {
        this.restaurentForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            address: ['', Validators.required],
            services: ['', Validators.required]
        })

        this.getAlldata()
    }

    get nameRequired(){
        return this.restaurentForm.get('name');
    }
    get emailRequired(){
        return this.restaurentForm.get('email');
    }
    get mobileRequired(){
        return this.restaurentForm.get('mobile');
    }
    get addressRequired(){
        return this.restaurentForm.get('address')
    }
    get serviceRequired(){
        return this.restaurentForm.get('services')
    }

    getAlldata(){
        this.apiservices.getRestuarentData().subscribe(data=>{
            this.restuarentUserList=data;
        }, error=>{
            alert(error)
        })
    }
    deleteData(data:any){
        this.apiservices.deleteRestuarent(data.id).subscribe(data=>{
            this.getAlldata();
        })
    }
    editForm(data:any){
        this.openModal();
        this.restaurentForm.controls['name'].patchValue(data.name);
        this.restaurentForm.controls['email'].patchValue(data.email);
        this.restaurentForm.controls['mobile'].patchValue(data.mobile);
        this.restaurentForm.controls['address'].patchValue(data.mobile);
        this.restaurentForm.controls['services'].patchValue(data.mobile);
    }
    openModal(){
        this.isOpenModal=true
    }
    closeModal(){
        this.isOpenModal=false;
        this.restaurentForm.reset();
    }
    //
    onSubmit(){
        if(this.restaurentForm.value.id > 0){
            let updateForm={
                name: this.restaurentForm.value.name,
                email: this.restaurentForm.value.email,
                mobile: this.restaurentForm.value.mobile,
                address: this.restaurentForm.value.address,
                services: this.restaurentForm.value.services
            }
            this.apiservices.updateRestuarent(updateForm, this.restaurentForm.value.id).subscribe(data=>{
                console.log(data)
                this.getAlldata();
            })
        }else{
            this.apiservices.postRestuarentData(this.restaurentForm.value).subscribe(data=>{
                console.log(data)
                this.getAlldata();
            })
        }
       this.closeModal();
    }

    logout(){
        this.router.navigate(['./login']);
        localStorage.removeItem('token');
    }

}