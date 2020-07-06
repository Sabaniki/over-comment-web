import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {VoteStatus} from '../../shared/interfaces/vote-status';
import {Observable} from 'rxjs';
import {VoteChoice} from '../../shared/interfaces/vote-choice';
import {VoteChoicesManagerService} from '../../shared/service/vote-choices-manager.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  public voteStatus: Observable<VoteStatus>;
  public topicText: string;

  constructor(private afs: AngularFirestore, private voteChoicesManagerService: VoteChoicesManagerService) {
  }

  ngOnInit(): void {
    this.voteStatus = this.afs.collection('vote').doc<VoteStatus>('status').valueChanges();
  }

  onClickStartVoteButton() {
    this.afs.collection('vote').doc<VoteChoice>('choices').update(this.voteChoicesManagerService.voteChoices)
      .then(this.voteChoicesManagerService.resetChoice);
    this.afs.collection('vote').doc<VoteStatus>('status').update({isVoting: true});
  }

  onClickAddChoicesButton() {
    this.voteChoicesManagerService.voteChoices.texts.push('');
    this.voteChoicesManagerService.voteChoices.points.push(0);
  }
}
