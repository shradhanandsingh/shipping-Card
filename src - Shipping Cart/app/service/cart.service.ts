import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList: any=[];
  productList = new BehaviorSubject<any>([])
  search= new BehaviorSubject<string>("");

  constructor() { }

  getProducts(){
    return this.productList.asObservable()
  }
  // setProduct(product:any){
  //   this.cartItemList.push(product);
  //   this.productList.next(product);
  // }
  addToCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList)
    this.getTotalAmount();

    console.log(this.cartItemList)
  }
  getTotalAmount(): number{
    let totalAmount = 0;
    this.cartItemList.map((a:any)=>{
      totalAmount += a.total;
    })
    return totalAmount
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index, 1)
      }
    })
    this.productList.next(this.cartItemList)
  }

  removeAllcart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList)
  }

}
