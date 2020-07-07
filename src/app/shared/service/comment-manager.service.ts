import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Comment} from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentManagerService {
  private commentsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    this.commentsCollection = this.afs.collection<Comment>(new Date().toDateString());
  }

  public sendComment(commentText: string, commentColor: string = '#fff"', commentSize: number = 32){
    this.commentsCollection.add({
      text: commentText,
      color: commentColor,
      size: commentSize
    });

  }
}
