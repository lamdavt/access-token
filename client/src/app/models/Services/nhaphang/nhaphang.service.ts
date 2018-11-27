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
export class NhaphangService {

  constructor(private http: Http, private userSV: TokenService, private toastSV: ToastrService) { }
  private token = this.userSV.getToken();
  createNhapHang(ime: any) {
    return this.http.post("http://localhost:3000/merchandise", ime,this.token).pipe(map(res =>{
      if(res){
        this.toastSV.success("Ok, Thêm Thành Công");
        res.json() as IMerchandises[];
      }
    }))
  }
  getNhapHang(){
    return this.http.get("http://localhost:3000/merchandise", this.token).pipe(map(res =>{
      return res.json() as IMerchandises[];
    }));
  }


}
