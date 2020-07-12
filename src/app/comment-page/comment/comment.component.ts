import {Component, OnInit} from '@angular/core';
import {ShowVoteComponentFlagManagerService} from '../../shared/service/show-vote-component-flag-manager.service';
import {CommentManagerService} from '../../shared/service/comment-manager.service';
import {VoteManagerService} from '../../shared/service/vote-manager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {

  public commentText: string;
  public isShowConfig: boolean;

  constructor(
    public showVoteComponentFlagManagerService: ShowVoteComponentFlagManagerService,
    public commentManagerService: CommentManagerService,
    public voteManagerService: VoteManagerService,
    private router: Router
  ) {
    showVoteComponentFlagManagerService.value = false;
    this.isShowConfig = false;
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

  onClickSendGrassButton() {
    this.commentManagerService.sendComment('www');
  }

  onClickGoCommentHistoryButton() {
    this.router.navigate(['history']);
  }
}
