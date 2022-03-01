import { Component, OnInit } from "@angular/core";
import { CartService } from "../../service/cart.service";
import { ApiService } from "../../service/api.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls:['./product.component.scss']
})

export class ProductComponent implements OnInit {

    productList =[]
    filterCategory: any;
    searckKey:string="";

    constructor(private apiService: ApiService, private cartService: CartService, private router: Router){}

    ngOnInit(): void {
        this.apiService.getAllData().subscribe(data=>{
            this.productList=data;
            this.filterCategory=data;

            this.productList.forEach((a:any)=> {
                if(a.category === "Men fashion" || a.category === "Women fashion"){
                    a.category ="fashion"
                }
                Object.assign(a, {quantity: 1, total:a.price})
            })

            this.cartService.search.subscribe(data=> {
                this.searckKey=data;
            })
        })
    }

    addToCart(item:any){
       this.cartService.addToCart(item)
    }

    filterProduct(category: string){
        this.filterCategory = this.productList.filter((data:any)=>{
            if(data.category == category || category == ''){
                return data;
            }
        })
    }

    viewProductDes(productId:number){
        this.router.navigate([`product_description/${productId}`]);
    }
}