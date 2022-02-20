import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
logoImg: string = '../../assets/images/udan.png';

constructor(private router: Router){}

notice = [
  {
    "note": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
  },
  {
    "note": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  }
]

getLogin(){
  this.router.navigate(['./login'])
}

}
