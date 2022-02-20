import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MaterialModule} from '../../material/material.module';
import { PassengerComponent } from './passengerAdd/passengerAdd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassengerDetailComponent } from './passenger-details/passenger-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/shared/api.service';
const routes: Routes = [
  { path: '', component: DashboardComponent,
  children: [
    {
      path:'',
      component: UserlistComponent
    },
    {
      path: 'add-passenger',
      component: PassengerComponent
    },
    {
      path: 'add-passenger/view',
      component: PassengerDetailComponent
    }
  ]
 }

];

@NgModule({
  declarations: [
    DashboardComponent,
    UserlistComponent,
    PassengerComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ], 
  providers: [ApiService]
})
export class DashboardModule { }
