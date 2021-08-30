import { TestBed } from '@angular/core/testing';

import { UseractivityService } from './useractivity.service';

describe('UseractivityService', () => {
  let service: UseractivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseractivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
