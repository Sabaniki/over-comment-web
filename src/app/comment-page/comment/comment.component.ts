import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {VoteStatus} from '../../shared/interfaces/vote-status';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  private commentsCollection: AngularFirestoreCollection;
  private today: Date;
  public commentText: string;
  private showVoteComponent = false;
  public voteStatus: Observable<VoteStatus>;


  constructor(private afs: AngularFirestore) {
  }


  ngOnInit(): void {
    this.today = new Date();
    this.commentsCollection = this.afs.collection<Comment>(this.today.toDateString());
    this.voteStatus = this.afs.collection('vote').doc<VoteStatus>('status').valueChanges();
    console.log(this.today.toDateString());
  }

  onClickSendCommentButton() {
    this.commentsCollection.add({text: this.commentText}).then(() => this.commentText = '');
  }
}
