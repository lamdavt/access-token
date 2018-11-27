import { IUser } from './../../models/Entity/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../models/Services/userservices/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  user: IUser;
  constructor(private userService: UserService,
      private toast: ToastrService
  ) { }

  ngOnInit() {
    this.toast.success('Ok','I am here');
    this.userService.getUserByToken()
    .subscribe(user => {
      console.log(this.user);
      this.user = user;
    });
  }

}
