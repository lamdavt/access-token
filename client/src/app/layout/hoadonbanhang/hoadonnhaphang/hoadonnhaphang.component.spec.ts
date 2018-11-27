import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoadonnhaphangComponent } from './hoadonnhaphang.component';

describe('HoadonnhaphangComponent', () => {
  let component: HoadonnhaphangComponent;
  let fixture: ComponentFixture<HoadonnhaphangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoadonnhaphangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoadonnhaphangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
