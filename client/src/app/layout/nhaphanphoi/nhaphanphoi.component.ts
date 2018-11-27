import { log } from 'util';
import { Observable } from 'rxjs';
import { ICompanys } from './../../models/Entity/companys.model';
import { NhaphanphoiService } from './../../models/Services/nhaphanphoi/nhaphanphoi.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-nhaphanphoi',
  templateUrl: './nhaphanphoi.component.html',
  styleUrls: ['./nhaphanphoi.component.scss']
})
export class NhaphanphoiComponent implements OnInit {

  public icompany: ICompanys[] = [];
  constructor(private nhapp: NhaphanphoiService,
    private toast:ToastrService) { }

  ngOnInit() {
    this.nhapp.getNPP().subscribe(data => {
      this.icompany = data;
      console.log(this.icompany);
    })
  }
  check : Boolean = false;
  checkButton(){
    this.check = true;
   
  }
  deleteNPP(id: Number){
  
  }
  deleteNPP2(id, index){
    var x= confirm("Bạn có muốn xóa không")
    if(x==true){
      this.icompany.splice(index, 1);
      this.nhapp.deleteNPP(id).subscribe(data =>{
        if(!data){
          console.log("a");
          this.toast.error("Delete Failed");
        }
        else{
          console.log(data);
          console.log(id);
          console.log("hihi");
          this.toast.success("Delete Ok");
        
        }
      })
    }
    else{
      this.toast.error("Xóa Đã Hủy")
    }
    
  }
}
