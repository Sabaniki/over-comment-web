import {Component, OnInit} from '@angular/core';
import {VoteChoicesManagerService} from '../../shared/service/vote-choices-manager.service';
import {VoteManagerService} from '../../shared/service/vote-manager.service';
import {CommentManagerService} from '../../shared/service/comment-manager.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  public topicText: string;

  constructor(
    public voteChoicesManagerService: VoteChoicesManagerService,
    public voteManagerService: VoteManagerService,
    public commentManagerService: CommentManagerService
  ) {
  }

  ngOnInit(): void {
  }

  onClickStartVoteButton() {
    this.voteManagerService.voteChoicesDoc.update(this.voteChoicesManagerService.voteChoices)
      .then(this.voteChoicesManagerService.resetChoice);
    this.voteManagerService.voteStatusDoc.update({currentVoteTopic: this.topicText, isVoting: true});
    this.commentManagerService.sendComment('投票が開始されました！webアプリから投票しましょう！！');
  }

  onClickAddChoicesButton() {
    this.voteChoicesManagerService.voteChoices.texts.push('');
    this.voteChoicesManagerService.voteChoices.points.push(0);
  }
}
