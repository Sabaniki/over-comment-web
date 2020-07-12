import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentHistoryCardComponent } from './comment-history-card.component';

describe('CommentHistoryCardComponent', () => {
  let component: CommentHistoryCardComponent;
  let fixture: ComponentFixture<CommentHistoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentHistoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
