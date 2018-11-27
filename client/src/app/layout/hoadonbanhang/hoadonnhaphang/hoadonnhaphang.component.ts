import { UserService } from './../../../models/Services/userservices/user.service';
import { IMerrchandisedetails } from './../../../models/Entity/merchandisedetails.model';
import { Component, OnInit } from '@angular/core';
import { IMerchandises } from './../../../models/Entity/merchandises.model';
import { ToastrService } from 'ngx-toastr';
import { NhaphangService } from './../../../models/Services/nhaphang/nhaphang.service';
import { NhaphanphoiService } from '../../../models/Services/nhaphanphoi/nhaphanphoi.service';

@Component({
  selector: 'app-hoadonnhaphang',
  templateUrl: './hoadonnhaphang.component.html',
  styleUrls: ['./hoadonnhaphang.component.scss']
})
export class HoadonnhaphangComponent implements OnInit {
  loadNhapHang: IMerchandises[] = [];
  UserMerchandise: any[] = [];
  name: String;
 
  constructor(private imeSV: NhaphangService, private toastSV: ToastrService, private userSV: UserService, private nhaPP: NhaphanphoiService) { }

  ngOnInit() {
    var tmp
    this.imeSV.getNhapHang().subscribe(data => {
    data.forEach(item=>{
      this.userSV.getUserByID(item.userMerchandise).subscribe(data=>{
        tmp = item;
        tmp.nameUser = data.name;
        console.log(tmp.nameUser);
        this.loadNhapHang.push(tmp);
        // console.log(this.loadNhapHang)
      })
      this.nhaPP.getOneNPPByID(item.idcompany).subscribe(data =>{
        tmp = item;
        tmp.nameNPP = data.name;
        this.loadNhapHang.push(tmp);
        console.log(this.loadNhapHang)

      })
    })
  })  


  }
  click(detai) {
    var tmp;

    console.log(detai);   
    this.UserMerchandise = detai;
  }

}
