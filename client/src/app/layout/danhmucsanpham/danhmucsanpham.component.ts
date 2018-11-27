import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DanhmucService } from './../../models/Services/danhmucsanpham/danhmuc.service';
import { ICatalogs } from './../../models/Entity/catalogs.model';
import { Component, OnInit } from '@angular/core';
import { ICapability } from 'selenium-webdriver';
@Component({
  selector: 'app-danhmucsanpham',
  templateUrl: './danhmucsanpham.component.html',
  styleUrls: ['./danhmucsanpham.component.scss']
})
export class DanhmucsanphamComponent implements OnInit {
catalogs: ICatalogs[]=[];

danhmuc: ICatalogs[]=[];

  constructor(private danhMucSV: DanhmucService, private router: Router, private toastSV: ToastrService) { }

  ngOnInit() {
    this.danhMucSV.getDanhMuc().subscribe(data =>{
      console.log(data);
      this.catalogs = data;
     this.danhmuc.push(data);
    })
    console.log(this.danhmuc);
  }
  check : Boolean = false;
  checkButton(){
    this.check = true;
   
  }
  deleteDanhMuc(id: Number){
    
  }
  deleteNPP2(id, index){
    var x = confirm("Bạn có muốn xóa không");
    if(x==true){
      this.catalogs.splice(index, 1);
      this.danhMucSV.deleteNPP(id).subscribe(data =>{
        if(!data){
          console.log("a");
          this.toastSV.error("Delete Failed");
        }
        else{
          console.log(data);
          console.log(id);
          console.log("hihi");
          this.toastSV.success("Delete Ok");
        
        }
      })
    
    }
    else{
     this.toastSV.error("Xóa Đã Hủy")
    }
  }
 
}
