import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucsanphamComponent } from './danhmucsanpham.component';

describe('DanhmucsanphamComponent', () => {
  let component: DanhmucsanphamComponent;
  let fixture: ComponentFixture<DanhmucsanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhmucsanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
