import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RestuarentComponent } from './component/restaurent/restuarent.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    {
        path:'', redirectTo: 'login', pathMatch: 'full'
    
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {
        path:'restaurent', component: RestuarentComponent, canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const COMPONENTS = [
    RestuarentComponent,
    LoginComponent,
    RegisterComponent
  ]
