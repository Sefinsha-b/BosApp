import { TestBed } from '@angular/core/testing';

import { LoansModuleService } from './loans-module.service';

describe('LoansModuleService', () => {
  let service: LoansModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoansModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
