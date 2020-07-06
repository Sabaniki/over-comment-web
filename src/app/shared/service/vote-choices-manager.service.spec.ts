import { TestBed } from '@angular/core/testing';

import { VoteChoicesManagerService } from './vote-choices-manager.service';

describe('VoteChoisesManagerService', () => {
  let service: VoteChoicesManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoteChoicesManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
