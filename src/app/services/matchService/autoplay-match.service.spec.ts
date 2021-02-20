import { TestBed } from '@angular/core/testing';

import { AutoplayMatchService } from './autoplay-match.service';

describe('AutoplayMatchService', () => {
  let service: AutoplayMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoplayMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
