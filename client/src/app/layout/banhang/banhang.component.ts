import { ToastrService } from 'ngx-toastr';
import { BanhangService } from './../../models/Services/banhang/banhang.service';
import { ICatalogs } from './../../models/Entity/catalogs.model';
import { DanhmucService } from './../../models/Services/danhmucsanpham/danhmuc.service';
import { SanphamService } from './../../models/Services/sanpham/sanpham.service';
import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../models/Entity/products.model'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-banhang',
  templateUrl: './banhang.component.html',
  styleUrls: ['./banhang.component.scss']
})
export class BanhangComponent implements OnInit {
  private product: IProducts;
  products: any[] = [];
  private name = new FormControl;
  check: Boolean = false;
  total: Number = 0;
  private quantt = new FormControl;
  Product: any[] = [];
  private mesage ="";
  constructor(private sanphamSV: SanphamService, private danhmucSV: DanhmucService,
    private banHangSV: BanhangService,
  private toastSV: ToastrService) {
    this.name.valueChanges.subscribe((value) => {
      this.sanphamSV.fitterSanpham(value).subscribe(data => {
        this.product = data;
        console.log(this.product);
        this.check = true;
      })
    })
    this.quantt.valueChanges.subscribe((value) => {
      this.subtotal();
    })
  }

  ngOnInit() {
  }
  ID: Number;
  click(id: Number) {
    var temp;
    this.ID = id;
    this.sanphamSV.getOneNPPByID(id).subscribe(data => {
      this.products.push(data);
    });

  }
  deleteNPP2(id, index) {
    this.products.splice(index, 1);
  }
  subtotal() {
    this.total = 0;
    var index = [];
    var tmp = 0;
    this.products.forEach(item => {
      index.push(item)
      tmp = tmp + item.quantitys * item.sellPrice;
      if (index.length == this.products.length) {
        this.total = tmp;
      }
    });
  }
  createNhapHang() {
    var body = [];
    var product={
      idProduct:0,
      quantitys:0
    };
    var cart={
      Product:[]
    }
    this.products.forEach(item => {
      product.idProduct = item.id;
      product.quantitys = item.quantitys;
      body.push(product)
      if(body.length == this.products.length){
        cart.Product=body;
        this.banHangSV.createBanHang(cart).subscribe(res => {
         console.log(res);
         if(res){
           this.toastSV.success("Thành công")
         }
        })
      }
    })

  }
}
