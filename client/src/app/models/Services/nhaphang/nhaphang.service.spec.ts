import { TestBed, inject } from '@angular/core/testing';

import { NhaphangService } from './nhaphang.service';

describe('NhaphangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NhaphangService]
    });
  });

  it('should be created', inject([NhaphangService], (service: NhaphangService) => {
    expect(service).toBeTruthy();
  }));
});
