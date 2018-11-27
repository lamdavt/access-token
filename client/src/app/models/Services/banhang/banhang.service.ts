import { IMerchandises } from './../../Entity/merchandises.model';
import { ToastrService } from 'ngx-toastr';
import { ICarts } from './../../Entity/cart.model';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { UserService } from './../userservices/user.service';
import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
@Injectable({
  providedIn: 'root'
})
export class BanhangService {

  constructor(private tokenSV: TokenService, private http: Http, private toastSV: ToastrService) { }
  private token = this.tokenSV.getToken();

  createBanHang(ime: any) {
    return this.http.post("http://localhost:3000/cart", ime,this.token).pipe(map(res =>{
      if(res){
      
        res.json() as any[];
        console.log(res);
        this.toastSV.success("Tao Thanh Cong")
      }
      else{
        this.toastSV.error("Lỗi rồi ");
      }
    }))
  }
  getHoaDon(){
    return this.http.get("http://localhost:3000/cart", this.token).pipe(map(res => {
      return res.json() as ICarts[];
    }))
  }

}
