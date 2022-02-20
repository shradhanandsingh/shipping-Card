import { Component, OnInit } from "@angular/core";
import { CartService } from "../service/cart.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    totalCartItem:number=0;
    searchTerm: string ='';
    constructor(private cartService: CartService){}

    ngOnInit(): void {
        this.cartService.getProducts().subscribe(res=>{
            this.totalCartItem = res.length
        })
    }

    searchProduct(event:any){
        this.searchTerm = (event.target as HTMLInputElement).value;
        console.log(this.searchTerm)
        this.cartService.search.next(this.searchTerm);
    }
}