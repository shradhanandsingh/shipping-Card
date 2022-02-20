import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  collages: boolean =false;
  typesOfNav = [
    {
      'link': 'dashboard',
      'name': 'Home',
      'icon':'fa-home'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(){
    this.collages = !this.collages
  }

 
}
