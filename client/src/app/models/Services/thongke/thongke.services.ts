import { ToastrService } from 'ngx-toastr';
import { log } from 'util';
import { TokenService } from './../token.service';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { IMerchandises } from './../../Entity/merchandises.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../userservices/user.service';
@Injectable({
  providedIn: 'root'
})
export class ThongKeService {

  constructor(private http: Http, private userSV: TokenService, private toastSV: ToastrService) { }
  private token = this.userSV.getToken();
  
  getThongKe(date1,date2){
 return    this.http.get("http://localhost:3000/statiscs?startDate="+date1+"&&endDate="+date2+"", this.token).pipe(map(res=>{
          return res.json();
      }))
  }

}
