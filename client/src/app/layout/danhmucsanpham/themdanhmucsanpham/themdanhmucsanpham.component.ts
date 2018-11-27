import { ToastrService } from 'ngx-toastr';
import { DanhmucService } from './../../../models/Services/danhmucsanpham/danhmuc.service';
import { IUser } from './../../../models/Entity/user.model';
import { UserService } from './../../../models/Services/userservices/user.service';
import { ICatalogs } from './../../../models/Entity/catalogs.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-themdanhmucsanpham',
  templateUrl: './themdanhmucsanpham.component.html',
  styleUrls: ['./themdanhmucsanpham.component.scss']
})
export class ThemdanhmucsanphamComponent implements OnInit {
  user: IUser;
  id: Number;
  danhmuc: ICatalogs = {
    name: '',
    userCreate: 0,
    
  }
  constructor(private userSV: UserService, private danhMucSV: DanhmucService, private toastSV: ToastrService) { }

  ngOnInit() {
    this.userSV.getUserByToken().subscribe(data => {
      this.user = data;
      this.id = this.user.id;
      console.log(this.id);
    })

  }
  createDanhMuc(){
    if(this.danhmuc.name!=""){
      this.danhMucSV.creatDanhMuc(this.danhmuc).subscribe(data =>{
        this.danhmuc.id = this.id;
        console.log(this.danhmuc.id);
      })
    }
    else{
      this.toastSV.error("Vui lòng nhập đầy đủ thông tin")
    }
   
  
}
}
