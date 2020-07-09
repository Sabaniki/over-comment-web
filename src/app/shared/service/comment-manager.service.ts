import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Comment} from '../interfaces/comment';
import {CommentConfigManagerService} from './comment-config-manager.service';

@Injectable({
  providedIn: 'root'
})
export class CommentManagerService {
  private commentsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private commentConfigManagerService: CommentConfigManagerService) {
    this.commentsCollection = this.afs.collection<Comment>(new Date().toDateString());
  }

  public sendComment(commentText: string){
    this.commentsCollection.add({
      text: commentText,
      color: this.commentConfigManagerService.fontColor,
      size: this.commentConfigManagerService.fontSize
    });

  }
}
