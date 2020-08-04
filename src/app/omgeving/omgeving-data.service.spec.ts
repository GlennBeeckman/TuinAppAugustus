import { TestBed } from '@angular/core/testing';

import { OmgevingDataService } from './omgeving-data.service';

describe('OmgevingDataService', () => {
  let service: OmgevingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmgevingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
