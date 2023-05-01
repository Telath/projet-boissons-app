import { TestBed } from '@angular/core/testing';

import { BouteilleService } from './bouteille.service';

describe('BouteilleService', () => {
  let service: BouteilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BouteilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
