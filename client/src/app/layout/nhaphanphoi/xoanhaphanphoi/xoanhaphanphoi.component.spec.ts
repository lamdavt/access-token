import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XoanhaphanphoiComponent } from './xoanhaphanphoi.component';

describe('XoanhaphanphoiComponent', () => {
  let component: XoanhaphanphoiComponent;
  let fixture: ComponentFixture<XoanhaphanphoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XoanhaphanphoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoanhaphanphoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
