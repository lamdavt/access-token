import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuachitiethoadonComponent } from './suachitiethoadon.component';

describe('SuachitiethoadonComponent', () => {
  let component: SuachitiethoadonComponent;
  let fixture: ComponentFixture<SuachitiethoadonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuachitiethoadonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuachitiethoadonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
