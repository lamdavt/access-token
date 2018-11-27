import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XoachitiethoadonComponent } from './xoachitiethoadon.component';

describe('XoachitiethoadonComponent', () => {
  let component: XoachitiethoadonComponent;
  let fixture: ComponentFixture<XoachitiethoadonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XoachitiethoadonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoachitiethoadonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
