import { ToastrService } from 'ngx-toastr';
import { DanhmucService } from './../../models/Services/danhmucsanpham/danhmuc.service';
import { SanphamService } from './../../models/Services/sanpham/sanpham.service';
import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../models/Entity/products.model';
import { Router } from '@angular/router';
import { ICatalogs } from './../../models/Entity/catalogs.model';
@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.scss']
})
export class SanphamComponent implements OnInit {
  sanpham: any[] = [];
  constructor(private sanPhamSV: SanphamService, private router: Router,
    private danhmucSV: DanhmucService,
    private toastSV: ToastrService) { }

  ngOnInit() {
    var tmp;
    this.sanPhamSV.getSanpham().subscribe(data => {
      data.forEach(item => {
        this.danhmucSV.getDanhMucyID(item.idCatalog).subscribe(data => {
          console.log(12121232, data);

          tmp = item;
          tmp.nameCatalog = data.name;
          this.sanpham.push(tmp)
        }
        )
      })
    })
  }
  check: Boolean = false;
  checkButton() {
    this.check = true;

  }
  deleteNPP2(id, index) {
    var x = confirm("Bạn có muốn xóa")
    if (x == true) {
      this.sanpham.splice(index, 1);
      this.sanPhamSV.deleteNPP(id).subscribe(data => {
        console.log(data);

        if (data) {
          this.toastSV.success("Ok, Xóa Thành Công");
        }
        else {
          this.toastSV.error("Fail");
        }
      })
    }else{
      this.toastSV.warning("Đã Hủy Xóa")
    }
  }


}
