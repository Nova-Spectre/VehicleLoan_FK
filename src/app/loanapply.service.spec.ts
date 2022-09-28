import { TestBed } from '@angular/core/testing';

import { LoanapplyService } from './loanapply.service';

describe('LoanapplyService', () => {
  let service: LoanapplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanapplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
