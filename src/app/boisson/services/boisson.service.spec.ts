import { TestBed } from '@angular/core/testing';

import { BoissonService } from './boisson.service';

describe('BoissonService', () => {
  let service: BoissonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoissonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
