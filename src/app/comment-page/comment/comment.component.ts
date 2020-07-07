import {Component, OnInit} from '@angular/core';
import {ShowVoteComponentFlagManagerService} from '../../shared/service/show-vote-component-flag-manager.service';
import {CommentManagerService} from '../../shared/service/comment-manager.service';
import {VoteManagerService} from '../../shared/service/vote-manager.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {

  public commentText: string;

  constructor(
    public showVoteComponentFlagManagerService: ShowVoteComponentFlagManagerService,
    public commentManagerService: CommentManagerService,
    public voteManagerService: VoteManagerService
  ) {
    showVoteComponentFlagManagerService.value = false;
  }


  ngOnInit(): void {
  }

  onClickSendCommentButton() {
    this.commentManagerService.sendComment(this.commentText);
    this.commentText = '';
  }

  onClickSendCrapButton() {
    this.commentManagerService.sendComment('88888888');
  }
}
