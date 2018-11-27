import { map } from 'rxjs/operators';
import { IUser } from './../../Entity/user.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htpp: Http,
     private router: Router,
     private tokenService: TokenService
    ) { }
private token= this.tokenService.getToken();
  checkLogin(email: String, password: String): Observable<any> {
    console.log(email);
    console.log(password);
    
    
    return this.htpp.post('http://localhost:3000/auth/login', { email: email, password: password })
      .pipe(map(token => {
        console.log(token);
        return token.json();
      }))
  }

  getUserByToken() {
    return this.htpp.get('http://localhost:3000/auth/getuserbytoken', this.tokenService.addToken())
    .pipe(map(user => {
      return user.json(); 
    }))
  }
  getUserByID(id){
return this.htpp.get("http://localhost:3000/user/"+id, this.token).pipe(map(res=>{
 return res.json();
}))
  }

}
