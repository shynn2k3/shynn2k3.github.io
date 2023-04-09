import { TestBed } from '@angular/core/testing';

import { AccssService } from './accss.service';

describe('AccssService', () => {
  let service: AccssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
