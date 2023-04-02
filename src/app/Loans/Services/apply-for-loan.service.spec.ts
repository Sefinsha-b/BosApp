import { TestBed } from '@angular/core/testing';

import { ApplyForLoanService } from './apply-for-loan.service';

describe('ApplyForLoanService', () => {
  let service: ApplyForLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyForLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
