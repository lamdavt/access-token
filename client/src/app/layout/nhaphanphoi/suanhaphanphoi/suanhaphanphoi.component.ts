import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ICompanys } from '../../../models/Entity/companys.model';
import { NhaphanphoiService } from '../../../models/Services/nhaphanphoi/nhaphanphoi.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-suanhaphanphoi',
  templateUrl: './suanhaphanphoi.component.html',
  styleUrls: ['./suanhaphanphoi.component.scss']
})
export class SuanhaphanphoiComponent implements OnInit {
  company: ICompanys = {
    name: '',
    logo: '',
    address: '',
    phone: ''
  }
  constructor(private nhappService: NhaphanphoiService, 
    private router: Router,
     private route: ActivatedRoute,
     private toast:ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = (params['id'] as Number);
      console.log(id);
      this.nhappService.getOneNPPByID(id).subscribe(company => {
        this.company = company;
        console.log("haha");
      });
    });
  }
  updateNPP() {
    this.route.params.subscribe(params => {
      const id = (params['id'] as Number);
      console.log(id);
      this.nhappService.upDateNPP(id, this.company).subscribe(data => {
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
