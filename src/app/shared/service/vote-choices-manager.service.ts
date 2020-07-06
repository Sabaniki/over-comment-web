import {Injectable} from '@angular/core';
import {VoteChoice} from '../interfaces/vote-choice';

@Injectable({
  providedIn: 'root'
})
export class VoteChoicesManagerService {

  public voteChoices: VoteChoice;

  constructor() {
    this.resetChoice();
  }

  public resetChoice() {
    this.voteChoices = {
      points: [0, 0],
      texts: ['', '']
    };
  }
}
