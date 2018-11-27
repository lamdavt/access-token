import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemdanhmucsanphamComponent } from './themdanhmucsanpham.component';

describe('ThemdanhmucsanphamComponent', () => {
  let component: ThemdanhmucsanphamComponent;
  let fixture: ComponentFixture<ThemdanhmucsanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemdanhmucsanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemdanhmucsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
