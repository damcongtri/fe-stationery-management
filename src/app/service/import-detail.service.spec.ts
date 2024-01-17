import { TestBed } from '@angular/core/testing';

import { ImportDetailService } from './import-detail.service';

describe('ImportDetailService', () => {
  let service: ImportDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
