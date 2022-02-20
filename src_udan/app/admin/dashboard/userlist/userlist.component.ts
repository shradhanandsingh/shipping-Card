import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  displayedColumns: string[] = ['passenger','Airline', 'Departure','Arrival', 'Duration', 'price'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  baseUrl= environment.baseUrl;
  userList:any=[]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAlldata()
  }
  getAlldata(){
    this.http.get(this.baseUrl + 'users').subscribe(res=>{
      this.userList=res;
      console.log('jjkjk', this.userList)
    })
  }

}

export interface PeriodicElement {
  airline: string;
  passenger: string;
  planeNo: string;
  departure: string;
  dePlace: string;
  arrival: string;
  arrPlace: string;
  duration: string;
  stopA: number;
  price: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {passenger:'Vi Prasad', airline: 'AirAsia (India)', planeNo:'I5-784/992', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {passenger:'Hazare ram', airline: 'Helium',planeNo:'I5-763/517',  departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {passenger:'Dhani ram', airline: 'Lithium',planeNo:'I5-763/517',departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 0, price: 5950},
  {passenger:'Micheal Gorge', airline: 'Beryllium',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {passenger:'Harpreet Brar', airline: 'Boron',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {passenger:'SNS Singh', airline: 'Carbon',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)', arrival: '01:35',arrPlace: 'Kolkata (CCU)',duration:'9h 20m', stopA: 1, price: 5950},
  {passenger:'Love', airline: 'Nitrogen',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {passenger:'Ush Chopra', airline: 'Oxygen',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {passenger:'VK Rao', airline: 'Fluorine',planeNo:'I5-763/517', departure: '16:15', dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)',duration:'9h 20m', stopA: 1, price: 5950},
];
