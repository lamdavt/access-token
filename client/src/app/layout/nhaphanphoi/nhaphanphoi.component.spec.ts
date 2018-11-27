import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaphanphoiComponent } from './nhaphanphoi.component';

describe('NhaphanphoiComponent', () => {
  let component: NhaphanphoiComponent;
  let fixture: ComponentFixture<NhaphanphoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaphanphoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaphanphoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
