import { TokenService } from './../token.service';
import { ICompanys } from './../../Entity/companys.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NhaphanphoiService {

  constructor(private http: Http, private router: Router, private tokenSV: TokenService) {

  }
 private token = this.tokenSV.getToken();
  createNPP(icompany: ICompanys) {
    return this.http.post("http://localhost:3000/company", icompany, this.token).pipe(map(res => {
      console.log(res);
      return res.json();
    }))
  }
  getNPP(): Observable<any> {
    return this.http.get("http://localhost:3000/company", this.token).pipe(map(res => {
      // console.log(res);
      return res.json() as ICompanys[];
    }))
  }
  getOneNPPByID(id: Number): Observable<ICompanys> {
    return this.getNPP().pipe(map(npp => {
      return npp.find(nppid => {
        return nppid.id == id;
      })
    }))
  }
  upDateNPP(id: Number,icompany: ICompanys): Observable<any>{
    return this.http.put("http://localhost:3000/company/"+id, icompany, this.token)
  }
  deleteNPP(id: Number): Observable<any>{
    return this.http.delete("http://localhost:3000/company/"+id, this.token);
  }
}
