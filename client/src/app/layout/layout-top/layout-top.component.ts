import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-top',
  templateUrl: './layout-top.component.html',
  styleUrls: ['./layout-top.component.scss']
})
export class LayoutTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  click(){
    localStorage.removeItem('x');
    localStorage.clear();
    
  }

}
