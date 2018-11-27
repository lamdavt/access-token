import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { NhaphanphoiService } from '../../../models/Services/nhaphanphoi/nhaphanphoi.service';
import { ICompanys } from './../../../models/Entity/companys.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-themnhaphanphoi',
  templateUrl: './themnhaphanphoi.component.html',
  styleUrls: ['./themnhaphanphoi.component.scss']
})
export class ThemnhaphanphoiComponent implements OnInit {

  constructor(private nhapp: NhaphanphoiService, private toast:ToastrService ) { }

  ngOnInit() {
  }
  icompany: ICompanys[]=[];
  company: ICompanys = {
    name: '',
    logo : '',
    address: '',
    phone: ''
  }
  // createNhaPP(){
  //   this.nhapp.createNPP(this.company).subscribe(res => {
  //    if(res){
       
  //     this.toast.success('Ok','Thêm thành công');
      
  //    }
  //    else
  //    {
  //     this.toast.error('Ok','Thêm thất bại');
  //    }

  //   })
  creatNhaPP(){
  if(this.company.name!="" && this.company.logo!="" && this.company.phone!="" && this.company.address!=""){
    this.nhapp.createNPP(this.company).subscribe(res=>{
      if(res.message=="COMPANY_EXIST"){
        this.toast.error("Tên Nhà Phân Phối Trùng");
      }
      else if(res.message!="COMPANY_EXIST"){
        this.toast.success("Lưu Thành Công")
      }
    })
  }
  else{
    this.toast.error("Vui lòng nhập đầy đủ thông tin");

  }
  }
   
}
