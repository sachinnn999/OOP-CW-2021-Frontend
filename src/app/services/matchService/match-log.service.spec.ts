import { TestBed } from '@angular/core/testing';

import { MatchLogService } from './match-log.service';

describe('MatchLogService', () => {
  let service: MatchLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
