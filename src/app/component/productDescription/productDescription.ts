import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../../service/cart.service";
import { ApiService } from "../../service/api.service";

@Component({
    selector:'app-product-des',
    templateUrl: './productDescription.html',
    styleUrls: ['./productDescription.scss']
})

export class ProductDescriptionComponent implements OnInit{

    passId: any;
    selectedProduct:any;
    productList:any=[]

    constructor(private activateRoute: ActivatedRoute, private apiService: ApiService, private cartService: CartService){}

    ngOnInit(): void {
        this.activateRoute.params.subscribe(params=>{
            this.passId = params.id
        });
        this.getAllData(this.passId)

    }

    getAllData(productId:any[]){
        this.apiService.getProductDescription(productId).subscribe(data=>{
            this.selectedProduct = data;

            console.log(this.selectedProduct)
        })
    }
    addToCart(item:any){
        this.cartService.addToCart(item)
     }
}