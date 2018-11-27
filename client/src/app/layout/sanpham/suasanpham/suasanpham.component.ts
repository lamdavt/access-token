import { DanhmucService } from './../../../models/Services/danhmucsanpham/danhmuc.service';
import { ICatalogs } from './../../../models/Entity/catalogs.model';
import { SanphamService } from './../../../models/Services/sanpham/sanpham.service';
import { IProducts } from './../../../models/Entity/products.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SafeMethodCall } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-suasanpham',
  templateUrl: './suasanpham.component.html',
  styleUrls: ['./suasanpham.component.scss']
})
export class SuasanphamComponent implements OnInit {
  danhmuc: ICatalogs[] =[];
  danhmucCT: ICatalogs[] =[];

  idUser: Number;
  
  sanpham: IProducts = {
    name: '',
    sellPrice: 0,
    inputPrice: 0,
    description: 'Tạo mặt hàng cho ST',
    purchases: 0,
    idCatalog: 0,
    idCompany: 0,
    userCreate: 0,
  }
  constructor(private router: Router, private sanpahmSV: SanphamService, private danhmucSV: DanhmucService,
  private route: ActivatedRoute ,
private toastSV: ToastrService) { }

  ngOnInit() {
    this.danhmucSV.getDanhMuc().subscribe(data=>{
      this.danhmuc = data;
      this.danhmucCT.push(data);
    })
    this.route.params.subscribe(params => {
      const id = (params['id'] as Number);
      console.log(id);
      this.sanpahmSV.getOneNPPByID(id).subscribe(sanphams=> {
        this.sanpham = sanphams;
        console.log("haha");
      });
    });

  }
  updateSanPham() {
    this.route.params.subscribe(params => {
      const id = (params['id'] as Number);
      console.log(id);
      this.sanpahmSV.upDateNPP(id, this.sanpham).subscribe(data => {
        console.log(data);
        if(data){
          this.toastSV.success("Thêm thành công, Ok");
        }
        else{
          this.toastSV.error("Thêm thất bại, Failed");

        }
      })
    })
  }
}
