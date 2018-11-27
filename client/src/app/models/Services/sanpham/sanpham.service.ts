import { TokenService } from './../token.service';
import { UserService } from './../userservices/user.service';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {IProducts} from '../../Entity/products.model';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanphamService {

  constructor(private http: Http, private userSV: UserService, private tokenSV: TokenService) { }
  private token = this.tokenSV.getToken();
  getSanpham(): Observable<any>{
    return this.http.get("http://localhost:3000/product", this.token).pipe(map(res =>{
      return res.json() as IProducts[];
    }))
  }
  createSanPham(sanpham: IProducts): Observable<any>{
    return this.http.post("http://localhost:3000/product",sanpham, this.token).pipe(map(res =>{
      return res.json();
    }))
  }
  upDateNPP(id: Number,sanpham: IProducts): Observable<any>{
    return this.http.put("http://localhost:3000/product/"+id, sanpham, this.token)
  }
  deleteNPP(id: Number): Observable<any>{
    return this.http.delete("http://localhost:3000/product/"+id, this.token);
  }
  getOneNPPByID(id: Number): Observable<any> {
    return this.getSanpham().pipe(map(npp => {
      return npp.find(nppid => {
        return nppid.id == id;
      })
    }))
  }
  fitterSanpham(value): Observable<any>{
    return this.getSanpham().pipe(map(datas=>{
      return datas.filter(data=>{
        return data.name.toLowerCase().includes(value.toLowerCase());
      })
    }));
  }
}
