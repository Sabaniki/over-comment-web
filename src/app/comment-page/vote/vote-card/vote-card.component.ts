import {Component, OnInit} from '@angular/core';
import {ShowVoteComponentFlagManagerService} from '../../../shared/service/show-vote-component-flag-manager.service';
import {VoteManagerService} from '../../../shared/service/vote-manager.service';
import {CommentManagerService} from '../../../shared/service/comment-manager.service';

@Component({
  selector: 'app-vote-card',
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.css']
})
export class VoteCardComponent implements OnInit {

  public isFirstVote: boolean;

  constructor(
    public showVoteComponentFlagManagerService: ShowVoteComponentFlagManagerService,
    public voteManagerService: VoteManagerService,
    public commentManagerService: CommentManagerService
  ) {
  }

  ngOnInit(): void {
    this.isFirstVote = true;
  }

  onClickAddPointButton(i: number) {
    this.voteManagerService.voteChoicesValueChanges.subscribe(voteChoices => {
      if (!this.isFirstVote) {
        return;
      }
      const votePoints = voteChoices.points;
      votePoints[i]++;
      this.voteManagerService.updateChoices(votePoints);
      this.isFirstVote = false;
    });
  }

  onClickFinishVoteButton() {
    this.commentManagerService.sendComment('投票が終了しました！webアプリを確認してください！！');
    this.voteManagerService.voteStatusDoc.update({isVoting: false});
    this.showVoteComponentFlagManagerService.value = false;
  }
}
