import { TokenService } from './../token.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ICatalogs } from './../../Entity/catalogs.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DanhmucService {

  constructor(private http: Http, private router: Router, private toastSV: ToastrService, private tokenSV: TokenService)
   { }
   private token = this.tokenSV.getToken();
   getDanhMuc(): Observable<any>{
  return  this.http.get("http://localhost:3000/catalog", this.token).pipe(map(data => {
       
       if(data){
        //  this.toastSV.success("Ok, Load Thành Công");
         return data.json()
       }
       else{
        this.toastSV.error("Load Failed");

       }
     }))
   }
   creatDanhMuc(catalog: ICatalogs): Observable<any>{
     return this.http.post("http://localhost:3000/catalog", catalog, this.token).pipe(map(data =>{
     if(data){
      this.toastSV.success("Ok, Thêm Thành Công");
      data.json() as ICatalogs[];
    }
    else{
     this.toastSV.error("Load Failed");

    }}));
   }
   getDanhMucyID(id: Number): Observable<any> {
    return this.getDanhMuc().pipe(map(npp => {
      return npp.find(nppid => {
        return nppid.id == id;
      })
    }))
  }
  upDateNPP(id: Number,catalog: ICatalogs): Observable<any>{
    return this.http.put("http://localhost:3000/catalog/"+id, catalog, this.token)
  }
  deleteNPP(id: Number): Observable<any>{
    return this.http.delete("http://localhost:3000/catalog/"+id, this.token);
  }
}
