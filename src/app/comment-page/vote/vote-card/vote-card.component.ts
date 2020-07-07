import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {VoteStatus} from '../../../shared/interfaces/vote-status';
import {VoteChoice} from '../../../shared/interfaces/vote-choice';
import {AngularFirestore} from '@angular/fire/firestore';
import {Comment} from '../../../shared/interfaces/comment';
import {ShowVoteComponentFlagManagerService} from '../../../shared/service/show-vote-component-flag-manager.service';

@Component({
  selector: 'app-vote-card',
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.css']
})
export class VoteCardComponent implements OnInit {
  public voteStatusValueChanges: Observable<VoteStatus>;
  public voteChoicesValueChanges: Observable<VoteChoice>;
  public isFirstVote: boolean;

  constructor(
    private afs: AngularFirestore,
    public showVoteComponentFlagManagerService: ShowVoteComponentFlagManagerService
  ) {
  }

  ngOnInit(): void {
    this.voteStatusValueChanges = this.afs.collection('vote').doc<VoteStatus>('status').valueChanges();
    this.voteChoicesValueChanges = this.afs.collection('vote').doc<VoteChoice>('choices').valueChanges();
    this.isFirstVote = true;
  }

  onClickAddPointButton(i: number) {
    this.voteChoicesValueChanges.subscribe(voteChoices => {
      if (!this.isFirstVote) {
        return;
      }
      const votePoints = voteChoices.points;
      votePoints[i]++;
      this.afs.collection('vote').doc<VoteChoice>('choices').update({points: votePoints});
      this.isFirstVote = false;
    });
  }

  onClickFinishVoteButton() {
    this.afs.collection<Comment>(new Date().toDateString()).add({text: '投票が終了しました！webアプリを確認してください！！'});
    this.afs.collection('vote').doc<VoteStatus>('status').update({isVoting: false});
    this.showVoteComponentFlagManagerService.value = false;
  }
}
