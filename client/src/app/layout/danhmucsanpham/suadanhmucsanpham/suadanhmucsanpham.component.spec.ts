import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuadanhmucsanphamComponent } from './suadanhmucsanpham.component';

describe('SuadanhmucsanphamComponent', () => {
  let component: SuadanhmucsanphamComponent;
  let fixture: ComponentFixture<SuadanhmucsanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuadanhmucsanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuadanhmucsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
