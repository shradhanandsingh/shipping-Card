import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDescriptionComponent } from './component/productDescription/productDescription';


const routes: Routes = [
    {
        path:'', redirectTo: 'product', pathMatch: 'full'
    
    },
    {
        path: 'product', component: ProductComponent 
    },
    {
        path: 'product_description/:id', component: ProductDescriptionComponent
    },
    {
        path: 'cart', component: CartComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const COMPONENTS = [
    ProductComponent,
    CartComponent
  ]
