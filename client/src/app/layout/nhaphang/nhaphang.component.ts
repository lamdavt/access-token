import { ToastrService } from 'ngx-toastr';
import { IMerchandises } from './../../models/Entity/merchandises.model';
import { UserService } from './../../models/Services/userservices/user.service';
import { element } from 'protractor';
import { DanhmucService } from './../../models/Services/danhmucsanpham/danhmuc.service';
import { IProducts } from './../../models/Entity/products.model';
import { SanphamService } from './../../models/Services/sanpham/sanpham.service';
import { NhaphanphoiService } from './../../models/Services/nhaphanphoi/nhaphanphoi.service';
import { Component, OnInit, Input } from '@angular/core';
import { ICompanys } from '../../models/Entity/companys.model';
import { FormControl } from '@angular/forms';
import {IUser} from '../../models/Entity/user.model';
import { NhaphangService } from '../../models/Services/nhaphang/nhaphang.service';
@Component({
  selector: 'app-nhaphang',
  templateUrl: './nhaphang.component.html',
  styleUrls: ['./nhaphang.component.scss']
})
export class NhaphangComponent implements OnInit {
  private product: IProducts;
  check: Boolean = false;
  nhapp: ICompanys[] = [];
  products: any[] = [];
  a: Number = 1;
  total: Number = 0;
  user: IUser;
  id: Number = 0;
  private idCompany: Number=0; 
  private name = new FormControl;
  private quantt = new FormControl;
   nhaphang: any = {
    idcompany: 0,
    titel: '',
    Product: this.products
  }
  constructor(private nhaPP: NhaphanphoiService, private sanphamService: SanphamService, private danhmucSV: DanhmucService,
  private userSV: UserService, 
private nhaphangSV: NhaphangService,
private toastSV: ToastrService) {
    this.name.valueChanges.subscribe((value) => {
      this.sanphamService.fitterSanpham(value).subscribe(data => {
        this.product = data;
        this.check = true;
      })
    });

    this.quantt.valueChanges.subscribe((value) => {
      this.subtotal();
    })

  }

  ngOnInit() {
    this.nhaPP.getNPP().subscribe(data => {
      this.nhapp = data;
    })
    this.userSV.getUserByToken().subscribe(data =>{
      this.user =data;
      this.id = this.user.id;
      console.log(this.id);
      
    })
  }
  ID: Number;
  click(id: Number) { // hàm này là mỗi khi search và click vào nó thì nó sẽ push vào mảng products
    this.ID = id;
    var tmp;
    this.sanphamService.getOneNPPByID(id).subscribe(data => {
      this.products.push(data);
    });
  }
  deleteNPP2(id, index) {
    this.products.splice(index, 1);
  }
  subtotal() {
    this.total =0;
    var index=[];
    var tmp=0;
    this.products.forEach(item => {
      index.push(item)
      tmp = tmp + item.quantitys * item.inputPrice;
      if(index.length == this.products.length){
        this.total = tmp;
      }
    });
  }
  createNhapHang(){
 console.log(this.nhaphang); 
    this.nhaphangSV.createNhapHang(this.nhaphang).subscribe(data =>{
      if(data){
        this.toastSV.success("Ok. Thành Công")
      }
    })
  }
}


