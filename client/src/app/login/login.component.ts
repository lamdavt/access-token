import { IUser } from './../models/Entity/user.model';
import { UserService } from './../models/Services/userservices/user.service';
import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { log } from 'util';
import { ToastrService } from 'ngx-toastr';

// import {Http}  from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userSV: UserService,
     private router: Router,
     private toastr: ToastrService
    ) { }
  user: IUser;
  email: String;
  password: String;
  ngOnInit() {


  }
  checkLogin() {
    this.userSV.checkLogin(this.email, this.password).subscribe(data => {
      if (!data.message) {
        localStorage.setItem('x', data.token);
        this.router.navigate(['./doashboard']);
      }else{
        this.toastr.error('Up, Login failed');
      }
    })
  }


}
