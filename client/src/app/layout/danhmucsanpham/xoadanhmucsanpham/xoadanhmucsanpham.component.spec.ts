import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XoadanhmucsanphamComponent } from './xoadanhmucsanpham.component';

describe('XoadanhmucsanphamComponent', () => {
  let component: XoadanhmucsanphamComponent;
  let fixture: ComponentFixture<XoadanhmucsanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XoadanhmucsanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoadanhmucsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
