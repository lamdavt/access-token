import { TestBed, inject } from '@angular/core/testing';

import { BanhangService } from './banhang.service';

describe('BanhangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BanhangService]
    });
  });

  it('should be created', inject([BanhangService], (service: BanhangService) => {
    expect(service).toBeTruthy();
  }));
});
