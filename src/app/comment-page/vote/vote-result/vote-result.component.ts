import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {VoteStatus} from '../../../shared/interfaces/vote-status';
import {VoteChoice} from '../../../shared/interfaces/vote-choice';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-vote-result',
  templateUrl: './vote-result.component.html',
  styleUrls: ['./vote-result.component.css']
})
export class VoteResultComponent implements OnInit {
  public voteStatusValueChanges: Observable<VoteStatus>;
  public voteChoicesValueChanges: Observable<VoteChoice>;
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.voteStatusValueChanges = this.afs.collection('vote').doc<VoteStatus>('status').valueChanges();
    this.voteChoicesValueChanges = this.afs.collection('vote').doc<VoteChoice>('choices').valueChanges();
  }

}
