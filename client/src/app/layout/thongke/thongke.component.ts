import { ToastrService } from 'ngx-toastr';
import { ThongKeService } from './../../models/Services/thongke/thongke.services';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.scss']
})
export class ThongkeComponent implements OnInit {
  data1: Date;
  data2: Date;
  tongtien = {
    totalPrice: ''
  }
  constructor(private thongkeSV: ThongKeService, private toastSV: ToastrService) { }

  ngOnInit() {


  }
  click(data1, data2) {
    var d1 = Date.parse(data1);
    var d2 = Date.parse(data2);
    if(d1>d2){
      this.toastSV.error("Ngày nhập vào phải nhỏ hơn ngày nhập tới ngày ")
    }
    if (data1 && data2) {
      this.thongkeSV.getThongKe(data1, data2).subscribe(data => {
        this.tongtien.totalPrice = data.totalPrice;
      })
    }
   else  {
      this.toastSV.error("Nhập ngày vào ! ")
    }
  }
}
