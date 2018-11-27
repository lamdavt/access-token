import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuanhaphanphoiComponent } from './suanhaphanphoi.component';

describe('SuanhaphanphoiComponent', () => {
  let component: SuanhaphanphoiComponent;
  let fixture: ComponentFixture<SuanhaphanphoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuanhaphanphoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuanhaphanphoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
