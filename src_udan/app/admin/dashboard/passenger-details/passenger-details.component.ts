import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


export interface PeriodicElement {
  name: string;
  position: number;
  meals: string;
  seat: string;
  passport: string;
  address: string;
  dateOfbirth: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'K.C Khan', meals: 'Chana Masala', seat: '1A', passport: 'DFRG1254SD', address: 'Kolkata', dateOfbirth: '21/09/1992' },
  {position: 2, name: 'P Das', meals: 'Chicken Masala', seat: '2B', passport: 'GFFRG1254SD', address: 'UK', dateOfbirth: '21/09/1992'},
  {position: 3, name: 'Priti Mani', meals: 'Naan Roti', seat: '3C', passport: 'ABRG1254SD', address: 'UP', dateOfbirth: '21/09/1992'},
  {position: 4, name: 'Ashwini', meals: 'Masala Dosa', seat: '2A', passport: 'KJRG1254SD', address: 'Bangalore', dateOfbirth: '21/09/1992'},
  {position: 5, name: 'Tusar', meals: 'Mator Paneer', seat: '3B', passport: 'BGRG1254SD', address: 'Delhi', dateOfbirth: '21/09/1992'},
  {position: 6, name: 'Dubey', meals: 'Itli', seat: '5B', passport: 'KMRG1254SD', address: 'Haryana', dateOfbirth: '21/09/1992'},
  {position: 7, name: 'Vincent', meals: 'Chana Masala', seat: '1C', passport: 'CVRG1254SD', address: 'Rajesthan', dateOfbirth: '21/09/1992'},
  {position: 8, name: 'Karina', meals: 'Chicken Masala', seat: '5C', passport: 'FSRG1254SD', address: 'Mumbai', dateOfbirth: '21/09/1992'},
  {position: 9, name: 'Sofia', meals: 'Motor Panner', seat: '1D', passport: 'WERG1254SD', address: 'Gujrat', dateOfbirth: '21/09/1992'},
  {position: 10, name: 'Tina', meals: 'Itli', seat: '3D', passport: 'OPRG1254SD', address: 'Kerala', dateOfbirth: '21/09/1992'},
];


@Component({
    selector: 'app-passenger-detail',
    templateUrl:'./passenger-details.component.html',
    styleUrls: ['./passenger-details.component.scss']
})

export class PassengerDetailComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'meals', 'seat', 'passport', 'address', 'dateOfbirth'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


    constructor(){}
    ngOnInit(){}

    @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
