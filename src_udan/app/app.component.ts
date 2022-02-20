import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  loader:boolean=true;

  constructor(){

  }
 
  ngAfterViewInit(){
   setTimeout(()=> this.loader=false, 2000)
  }
}
