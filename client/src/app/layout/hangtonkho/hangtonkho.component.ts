import { UserService } from './../../models/Services/userservices/user.service';
import { DanhmucService } from './../../models/Services/danhmucsanpham/danhmuc.service';
import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../models/Entity/products.model';
import { SanphamService } from '../../models/Services/sanpham/sanpham.service';
@Component({
  selector: 'app-hangtonkho',
  templateUrl: './hangtonkho.component.html',
  styleUrls: ['./hangtonkho.component.scss']
})
export class HangtonkhoComponent implements OnInit {
private products : any[]=[];
  constructor(private productSV: SanphamService, private danhMucSV: DanhmucService,
  private userSV: UserService) { }

  ngOnInit() {
    var tmp;
    this.productSV.getSanpham().subscribe(data=>{
    data.forEach(element => {
      this.danhMucSV.getDanhMucyID(element.idCatalog).subscribe(data=>{
        tmp = element;
        tmp.nameCatalog = data.name;
        this.products.push(tmp);
      })
    });
   
    })
  }

}
