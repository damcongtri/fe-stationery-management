import { TestBed } from '@angular/core/testing';

import { StationeriesService } from './stationeries.service';

describe('StationeriesService', () => {
  let service: StationeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
