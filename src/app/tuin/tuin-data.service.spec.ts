import { TestBed } from '@angular/core/testing';

import { TuinDataService } from './tuin-data.service';

describe('TuinDataService', () => {
  let service: TuinDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuinDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
