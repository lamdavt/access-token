import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoadonbanhangComponent } from './hoadonbanhang.component';

describe('HoadonbanhangComponent', () => {
  let component: HoadonbanhangComponent;
  let fixture: ComponentFixture<HoadonbanhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoadonbanhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoadonbanhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
