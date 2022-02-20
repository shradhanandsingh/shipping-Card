import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/api.service';


@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {
  displayedColumns: string[] = ['airline', 'departure','arrivel', 'price', 'book'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  flightList:[]
  currentDate: any;
  arrivalData: any;
  differentdate: any;
  diMinutes: any;
  airIndia: any;



  constructor(private router: Router, private service: ApiService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator; 
    this.getAllDetails();
   
  }

  getAllDetails(){
    this.service.getFlightList().subscribe(res=>{
      console.log(res);
      this.flightList = res;
     
    }, error=>{
      console.log('something went wrong')
    })

    this.currentDate = new Date();
    this.arrivalData = new Date(this.currentDate);
    this.arrivalData.setHours(this.currentDate.getHours() + 9);
    this.arrivalData.setMinutes(this.currentDate.getMinutes() + 20);
    this.differentdate = (this.arrivalData.getHours() - this.currentDate.getHours());
    this.diMinutes = (this.arrivalData.getMinutes() - this.currentDate.getMinutes());
  }


  

  
  bookNow(flightId){
    this.router.navigate([`./home/book-flight/${flightId}`])
  }

}


export interface PeriodicElement {
  airline: string;
  images: string;
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
  {images:'../../../assets/images/I5.png', airline: 'AirAsia (India)', planeNo:'I5-784/992', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/SG.png', airline: 'Helium',planeNo:'I5-763/517',  departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/I5.png', airline: 'Lithium',planeNo:'I5-763/517',departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 0, price: 5950},
  {images:'../../../assets/images/G8.png', airline: 'Beryllium',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/UK.png', airline: 'Boron',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/SG.png', airline: 'Carbon',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)', arrival: '01:35',arrPlace: 'Kolkata (CCU)',duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/SG.png', airline: 'Nitrogen',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/UK.png', airline: 'Oxygen',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/SG.png', airline: 'Fluorine',planeNo:'I5-763/517', departure: '16:15', dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)',duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/G8.png', airline: 'Neon',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/6E.png', airline: 'Sodium',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/UK.png', airline: 'Magnesium',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/G8.png', airline: 'Aluminum',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/SG.png', airline: 'Silicon',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/I5.png', airline: 'Phosphorus',planeNo:'I5-763/517',departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/G8.png', airline: 'Sulfur',planeNo:'I5-763/517',departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950}, 
  {images:'../../../assets/images/UK.png', airline: 'Chlorine', planeNo:'I5-763/517',departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
  {images:'../../../assets/images/SG.png', airline: 'Argon', planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA:0, price: 5950},
  {images:'../../../assets/images/6E.png', airline: 'Potassium',planeNo:'I5-763/517',  departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA:1, price: 5950},
  {images:'../../../assets/images/SG.png', airline: 'Calcium',planeNo:'I5-763/517', departure: '16:15',dePlace: 'New Delhi (DEL)',arrival: '01:35',arrPlace: 'Kolkata (CCU)', duration:'9h 20m', stopA: 1, price: 5950},
];