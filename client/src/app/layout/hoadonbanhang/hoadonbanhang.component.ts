import { ICarts } from './../../models/Entity/cart.model';
import { UserService } from './../../models/Services/userservices/user.service';
import { BanhangService } from './../../models/Services/banhang/banhang.service';
// import { IMerchandises } from './../../models/Entity/merchandises.model';
import { ToastrService } from 'ngx-toastr';
import { NhaphangService } from './../../models/Services/nhaphang/nhaphang.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hoadonbanhang',
  templateUrl: './hoadonbanhang.component.html',
  styleUrls: ['./hoadonbanhang.component.scss']
})
export class HoadonbanhangComponent implements OnInit {
  hoadon: any[]=[];
  chitiet: any[]=[];
  constructor(private hoadonSV: BanhangService, private toastSV: ToastrService, private userSV: UserService) { }

  ngOnInit() {
    var tmp;
    this.hoadonSV.getHoaDon().subscribe(data =>{
     
      console.log(data);
      data.forEach(item=>{
        this.userSV.getUserByID(item.userCreate).subscribe(data=>{
         tmp = item;
         tmp.nameUser = data.name;
         this.hoadon.push(tmp);
        })
      })
    });
    
    
  }
  click(detail){
    this.chitiet = detail;
  }

}
