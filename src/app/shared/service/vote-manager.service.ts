import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {VoteStatus} from '../interfaces/vote-status';
import {VoteChoice} from '../interfaces/vote-choice';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VoteManagerService {
  public voteCollection: AngularFirestoreCollection;

  public voteStatusDoc: AngularFirestoreDocument<VoteStatus>;
  public voteChoicesDoc: AngularFirestoreDocument<VoteChoice>;

  public voteStatusValueChanges: Observable<VoteStatus>;
  public voteChoicesValueChanges: Observable<VoteChoice>;

  constructor(private afs: AngularFirestore) {
    this.voteCollection = this.afs.collection('vote');
    this.voteStatusDoc = this.voteCollection.doc<VoteStatus>('status');
    this.voteChoicesDoc = this.voteCollection.doc<VoteChoice>('choices');
    this.voteStatusValueChanges = this.voteStatusDoc.valueChanges();
    this.voteChoicesValueChanges = this.voteChoicesDoc.valueChanges();
  }

  public updateChoices(votePoints: number[]) {
    this.voteChoicesDoc.update({points: votePoints});
  }
}
