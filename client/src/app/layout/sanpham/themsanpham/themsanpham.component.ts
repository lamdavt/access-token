import { ToastrService } from 'ngx-toastr';
import { IUser } from './../../../models/Entity/user.model';
import { IProducts } from './../../../models/Entity/products.model';
import { DanhmucService } from './../../../models/Services/danhmucsanpham/danhmuc.service';
import { ICatalogs } from './../../../models/Entity/catalogs.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../models/Services/userservices/user.service';
import { SanphamService } from '../../../models/Services/sanpham/sanpham.service';
@Component({
  selector: 'app-themsanpham',
  templateUrl: './themsanpham.component.html',
  styleUrls: ['./themsanpham.component.scss']
})
export class ThemsanphamComponent implements OnInit {
danhmuc: ICatalogs[] =[];
idUser: Number;
user: IUser;
name: String;
sanpham: IProducts = {
  name:'',
  sellPrice: 0,
  inputPrice: 0,
  description: 'Tạo mặt hàng cho ST',
  purchases: 0,
  idCatalog: 0,
  idCompany: 0,
  userCreate: 0,
}
  constructor(private router: Router, private danhmucSV: DanhmucService,
     private userSV: UserService, private sanphamSV: SanphamService,
    private toast: ToastrService) { }

  ngOnInit() {
    this.danhmucSV.getDanhMuc().subscribe(data =>{
      this.danhmuc = data;
      console.log(this.danhmuc);
      
    })
    this.userSV.getUserByToken().subscribe(data => {
      this.user = data;
      this.idUser = this.user.id;
    })
  }
  createSanpham(){
    this.sanphamSV.createSanPham(this.sanpham).subscribe(data =>{
      if(data){
        this.toast.success("Ok, Lưu Sản Phẩm Thành công");
      }
      else{
        this.toast.error("Failed");

      }
    })
  }

}
