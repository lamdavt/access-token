import { ToastrService } from 'ngx-toastr';
import { DanhmucService } from './../../../models/Services/danhmucsanpham/danhmuc.service';
import { ICatalogs } from './../../../models/Entity/catalogs.model';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-suadanhmucsanpham',
  templateUrl: './suadanhmucsanpham.component.html',
  styleUrls: ['./suadanhmucsanpham.component.scss']
})
export class SuadanhmucsanphamComponent implements OnInit {
  danhmuc: ICatalogs = {
    name: ''
    
  }
  constructor(private danhmucsv: DanhmucService, private router: Router, private route: ActivatedRoute, private toast: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = (params['id'] as Number);
      console.log(id);
      this.danhmucsv.getDanhMucyID(id).subscribe(danhmucs=> {
        this.danhmuc = danhmucs;
        console.log("haha");
      });
    });
  }
  updateDanhMuc() {
    this.route.params.subscribe(params => {
      const id = (params['id'] as Number);
      console.log(id);
      this.danhmucsv.upDateNPP(id, this.danhmuc).subscribe(data => {
        console.log(data);
        if(data){
          this.toast.success("Thêm thành công, Ok");
        }
        else{
          this.toast.error("Thêm thất bại, Failed");

        }
      })
    })
  }

}
