import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemnhaphanphoiComponent } from './themnhaphanphoi.component';

describe('ThemnhaphanphoiComponent', () => {
  let component: ThemnhaphanphoiComponent;
  let fixture: ComponentFixture<ThemnhaphanphoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemnhaphanphoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemnhaphanphoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
