import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  check : true;
  constructor(private router: Router){
    const checkToken =  localStorage.getItem('x');
    if(checkToken){
      this.router.navigate(['doashboard']);
    }else{
      this.router.navigate(['./']);
    }
  }
}
