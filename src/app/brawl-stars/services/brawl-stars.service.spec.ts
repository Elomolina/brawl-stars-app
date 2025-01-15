import { TestBed } from '@angular/core/testing';

import { BrawlStarsService } from './brawl-stars.service';

describe('BrawlStarsService', () => {
  let service: BrawlStarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrawlStarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
