import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { FlightDetailsComponent } from './flightDetails/flight-details.component';
import { ViewBookingComponent } from './viewBooking/viewBooking.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { EditPassenger } from './editPassenger/editPassenger.component';


const routes: Routes = [
    { path: '', component: HomeComponent,
    children: [
      {
        path: '', component: MainHomeComponent
      },
      {
        path: 'book-flight/:id', component: FlightDetailsComponent
      },
      {
        path: 'user-book/list', component: PassengerListComponent
      },
      {
        path: 'user-book/view/:id', component: ViewBookingComponent
      },
      {
        path: 'user-book/add', component: EditPassenger
      },
      {
        path: 'user-book/edit/:id', component: EditPassenger
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

export const COMPONENTS = [
    HomeComponent,
    MainHomeComponent,
    FlightDetailsComponent,
    PassengerListComponent,
    ViewBookingComponent,
    EditPassenger
  ]
