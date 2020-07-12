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
    this.targetDate = new Date();
    this.changeTargetDate(new Date());
  }

  public changeTargetDate(date: Date) {
    this.commentHistoryCollection = this.afs.collection<Comment>(
      date.toDateString(),
      ref => ref.orderBy('createdAt', 'desc')
    );
    this.commentHistoryValueChanges = this.commentHistoryCollection.valueChanges();
  }
}
