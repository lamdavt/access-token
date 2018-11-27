import { TokenService } from './models/Services/token.service';
import { LoginService } from './models/Services/login/login.service';
import { UserService } from './models/Services/userservices/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { NhaphangComponent } from './layout/nhaphang/nhaphang.component';
import { ThongkeComponent } from './layout/thongke/thongke.component';
import { QlnhanvienComponent } from './layout/qlnhanvien/qlnhanvien.component';
import { LayoutTopComponent } from './layout/layout-top/layout-top.component';
import { MenuComponent } from './layout/menu/menu.component';
import { RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {APP_BASE_HREF} from '@angular/common';
import { BanhangComponent } from './layout/banhang/banhang.component';
import { HangtonkhoComponent } from './layout/hangtonkho/hangtonkho.component';
import { DanhmucsanphamComponent } from './layout/danhmucsanpham/danhmucsanpham.component';
import { NhaphanphoiComponent } from './layout/nhaphanphoi/nhaphanphoi.component';
import { ThemnhaphanphoiComponent } from './layout/nhaphanphoi/themnhaphanphoi/themnhaphanphoi.component';
import { HoadonbanhangComponent } from './layout/hoadonbanhang/hoadonbanhang.component';
import { ThemdanhmucsanphamComponent } from './layout/danhmucsanpham/themdanhmucsanpham/themdanhmucsanpham.component'
import { SuanhaphanphoiComponent } from './layout/nhaphanphoi/suanhaphanphoi/suanhaphanphoi.component';
import { SuadanhmucsanphamComponent } from './layout/danhmucsanpham/suadanhmucsanpham/suadanhmucsanpham.component';
import { XoadanhmucsanphamComponent } from './layout/danhmucsanpham/xoadanhmucsanpham/xoadanhmucsanpham.component';
import { XoanhaphanphoiComponent } from './layout/nhaphanphoi/xoanhaphanphoi/xoanhaphanphoi.component';
import { SuachitiethoadonComponent } from './layout/hoadonbanhang/suachitiethoadon/suachitiethoadon.component';
import { XoachitiethoadonComponent } from './layout/hoadonbanhang/xoachitiethoadon/xoachitiethoadon.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { SanphamComponent } from './layout/sanpham/sanpham.component';
import { ThemsanphamComponent } from './layout/sanpham/themsanpham/themsanpham.component';
import { SuasanphamComponent } from './layout/sanpham/suasanpham/suasanpham.component';
import { HoadonnhaphangComponent } from './layout/hoadonbanhang/hoadonnhaphang/hoadonnhaphang.component';
    // import {ToastModule} from 'ng2-toastr/ng2-toastr';
    // import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    NhaphangComponent,
    ThongkeComponent,
    QlnhanvienComponent,
    LayoutTopComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    BanhangComponent,
    HangtonkhoComponent,
    DanhmucsanphamComponent,
    NhaphanphoiComponent,
    ThemnhaphanphoiComponent,
    HoadonbanhangComponent,
    ThemdanhmucsanphamComponent,
    SuanhaphanphoiComponent,
    SuadanhmucsanphamComponent,
    XoadanhmucsanphamComponent,
    XoanhaphanphoiComponent,
    SuachitiethoadonComponent,
    XoachitiethoadonComponent,
    SanphamComponent,
    ThemsanphamComponent,
    SuasanphamComponent,
    HoadonnhaphangComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {
        canActivate:[LoginService],
        path: 'doashboard', component: LayoutComponent, children: [
        {path:'hangtonkho', component: HangtonkhoComponent},
        {path: 'banhang', component: BanhangComponent},
        {path: 'nhaphang', component: NhaphangComponent},
        {path: 'thongkechitieu', component: ThongkeComponent},
        {path: 'hoadonbanhang', component: HoadonbanhangComponent},
        {path: 'hoadonnhaphang', component: HoadonnhaphangComponent},
        {path: 'nhaphanphoi', component: NhaphanphoiComponent, children: [
          {path: 'suanhaphanphoi/:id', component: SuanhaphanphoiComponent},
          {path: 'xoanhaphanphoi', component: XoanhaphanphoiComponent},
        ]},
        {path: 'themnhaphanphoi', component: ThemnhaphanphoiComponent},
        {path: 'doanhmucsanpham', component: DanhmucsanphamComponent, children: [
          {path: 'xoadanhmuc', component: XoadanhmucsanphamComponent},
          {path: 'suadanhmuc/:id', component: SuadanhmucsanphamComponent},
        ]},
        {path: 'themdanhmucsanpham', component: ThemdanhmucsanphamComponent},
        {path: 'sanpham', component: SanphamComponent, children:[
          {path: 'suasanpham/:id', component: SuasanphamComponent},
         
        ]},
        { path:'themsanpham', component: ThemsanphamComponent}
  
      ]},
    
    ]),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
   
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, UserService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }