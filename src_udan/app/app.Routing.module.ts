import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/Sign up/signup.component';


const routes: Routes = [
    {
        path:'', redirectTo: 'home', pathMatch: 'full'
    
    },
    {
        path: 'login', component:LoginComponent
    },
    {
        path: 'sign-up', component: SignUpComponent
    },
    { path: 'dashboard', loadChildren: './admin/dashboard/dashboard.module#DashboardModule' },
    { path: 'home', loadChildren: './layout/home/home.module#HomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const COMPONENTS = [
    LoginComponent,
    SignUpComponent
  ]
