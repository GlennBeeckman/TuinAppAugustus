import { TestBed } from '@angular/core/testing';

import { TuinResolverService } from './tuin-resolver.service';

describe('TuinResolverService', () => {
  let service: TuinResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuinResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
