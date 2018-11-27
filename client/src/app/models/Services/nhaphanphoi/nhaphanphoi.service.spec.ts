import { TestBed, inject } from '@angular/core/testing';

import { NhaphanphoiService } from './nhaphanphoi.service';

describe('NhaphanphoiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NhaphanphoiService]
    });
  });

  it('should be created', inject([NhaphanphoiService], (service: NhaphanphoiService) => {
    expect(service).toBeTruthy();
  }));
});
