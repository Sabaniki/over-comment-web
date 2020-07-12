import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Comment} from '../interfaces/comment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentHistoryService {
  public commentHistoryCollection: AngularFirestoreCollection<Comment>;
  public commentHistoryValueChanges: Observable<Comment[]>;
  public targetDate: Date;

  constructor(private afs: AngularFirestore) {
    this.commentHistoryCollection = afs.collection<Comment>(
      new Date().toDateString(),
      ref => ref.orderBy('createdAt', 'asc')
    );
    this.commentHistoryValueChanges = this.commentHistoryCollection.valueChanges();
    this.targetDate = new Date();
  }
}
