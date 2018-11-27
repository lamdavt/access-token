import { TestBed, inject } from '@angular/core/testing';

import { DanhmucService } from './danhmuc.service';

describe('DanhmucService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DanhmucService]
    });
  });

  it('should be created', inject([DanhmucService], (service: DanhmucService) => {
    expect(service).toBeTruthy();
  }));
});
