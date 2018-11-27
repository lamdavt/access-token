import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangtonkhoComponent } from './hangtonkho.component';

describe('HangtonkhoComponent', () => {
  let component: HangtonkhoComponent;
  let fixture: ComponentFixture<HangtonkhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangtonkhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangtonkhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
