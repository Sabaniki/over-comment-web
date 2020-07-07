import { TestBed } from '@angular/core/testing';

import { ShowVoteComponentFlagManagerService } from './show-vote-component-flag-manager.service';

describe('ShowVoteComponentFlagManagerService', () => {
  let service: ShowVoteComponentFlagManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowVoteComponentFlagManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
