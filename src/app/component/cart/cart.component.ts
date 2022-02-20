import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "../../service/cart.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls:['./cart.component.scss']
})

export class CartComponent implements OnInit {

    productList =[]
    totalAmount :number=0;

    constructor(private cartservice: CartService, private router: Router){}

    ngOnInit(): void {
        this.cartservice.getProducts().subscribe(res=>{
            this.productList = res;
            this.totalAmount = this.cartservice.getTotalAmount()
        })
    }
    removeCart(item:any){
        this.cartservice.removeCartItem(item)
    }

    emptyCart(){
        this.cartservice.removeAllcart()
    }
    goToProduct(){
        this.router.navigate(['product'])
    }
}