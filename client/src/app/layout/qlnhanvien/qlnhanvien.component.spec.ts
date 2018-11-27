import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlnhanvienComponent } from './qlnhanvien.component';

describe('QlnhanvienComponent', () => {
  let component: QlnhanvienComponent;
  let fixture: ComponentFixture<QlnhanvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlnhanvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlnhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
