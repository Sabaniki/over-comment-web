import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {VoteStatus} from '../../shared/interfaces/vote-status';
import {Observable} from 'rxjs';
import {VoteChoice} from '../../shared/interfaces/vote-choice';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {

  private commentsCollection: AngularFirestoreCollection;
  private today: Date;
  public commentText: string;
  public showVoteComponent = false;
  public voteStatusValueChanges: Observable<VoteStatus>;
  public voteChoicesValueChanges: Observable<VoteChoice>;

  constructor(private afs: AngularFirestore) {
  }


  ngOnInit(): void {
    this.today = new Date();
    this.commentsCollection = this.afs.collection<Comment>(this.today.toDateString());
    this.voteStatusValueChanges = this.afs.collection('vote').doc<VoteStatus>('status').valueChanges();
    this.voteChoicesValueChanges = this.afs.collection('vote').doc<VoteChoice>('choices').valueChanges();
    console.log(this.today.toDateString());
  }

  onClickSendCommentButton() {
    this.commentsCollection.add({text: this.commentText}).then(() => this.commentText = '');
  }
}
