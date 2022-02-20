import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/api.service';
import { environment } from '../../../../environments/environment';
@Component({
    selector: 'app-passenger-list',
    templateUrl: './passenger-list.component.html',
    styleUrls: ['./passenger-list.component.scss']
})

export class PassengerListComponent implements OnInit {
    displayedColumns: string[] = ['fname', 'phone', 'passClass','seat', 'wheelchair', 'child', 'show'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    constructor(private router: Router, private service: ApiService) { }

    url = environment.baseUrl;

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.getAllData();
        //  this.getmeals()
    }

    passngerLst: any = [];

    seatConfirm: any=[]
    getAllData() {
        this.service.getPassengerList().subscribe(data => {
            this.passngerLst = data;

        })
    }

    showDetail(passengerId){
        this.router.navigate([`./home/user-book/view/${passengerId}`])
      }

      editDetail(editId){
          this.router.navigate([`./home/user-book/edit/${editId}`])
      }

}

export interface PeriodicElement {
    passenger: string;
    meals: string;
    seat: string;
    wheelchair: boolean;
    child: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { passenger: 'Ram Kanta', meals: 'Chana Masala', seat: '1A', wheelchair: true, child: false },
    { passenger: 'Vijay Sharma', meals: 'Meat Masala', seat: '2B', wheelchair: false, child: false },
    { passenger: 'Kr Kanta', meals: 'Chana Masala', seat: '2A', wheelchair: true, child: true },
    { passenger: 'Sankar Kanta', meals: 'Chana Masala', seat: '3A', wheelchair: false, child: false },
    { passenger: 'R Khan', meals: 'Naan Roti', seat: '1C', wheelchair: true, child: false },
    { passenger: 'Sn Singh', meals: 'Chicken Masala', seat: '1D', wheelchair: false, child: true },
    { passenger: 'Desilva', meals: 'Chana Masala', seat: '1A', wheelchair: true, child: false },
    { passenger: 'U Khan', meals: 'Chana Masala', seat: '1A', wheelchair: false, child: false },
    { passenger: 'R Khan', meals: 'Naan Roti', seat: '1C', wheelchair: true, child: false },
    { passenger: 'Sn Singh', meals: 'Chicken Masala', seat: '1D', wheelchair: false, child: true },
    { passenger: 'Desilva', meals: 'Chana Masala', seat: '1A', wheelchair: true, child: false },
    { passenger: 'U Khan', meals: 'Chana Masala', seat: '1A', wheelchair: false, child: false },
];