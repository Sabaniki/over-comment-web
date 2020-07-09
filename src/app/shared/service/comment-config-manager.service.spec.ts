import { TestBed } from '@angular/core/testing';

import { CommentConfigManagerService } from './comment-config-manager.service';

describe('CommentConfigManagerService', () => {
  let service: CommentConfigManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentConfigManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
