import { TestBed } from '@angular/core/testing';

import { CommentHistoryService } from './comment-history.service';

describe('CommentHistoryService', () => {
  let service: CommentHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
