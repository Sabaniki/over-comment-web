import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  private commentsCollection: AngularFirestoreCollection;
  private today: Date;
  public commentText: string;

  constructor(private afs: AngularFirestore) {
  }


  ngOnInit(): void {
    this.today = new Date();
    this.commentsCollection = this.afs.collection<Comment>(this.today.toDateString());
    console.log(this.today.toDateString());
  }

  onClickSendCommentButton() {
    this.commentsCollection.add({text: this.commentText}).then(() => this.commentText = '');
  }
}
