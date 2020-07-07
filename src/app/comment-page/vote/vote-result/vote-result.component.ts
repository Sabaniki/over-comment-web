import { Component, OnInit } from '@angular/core';
import {VoteManagerService} from '../../../shared/service/vote-manager.service';

@Component({
  selector: 'app-vote-result',
  templateUrl: './vote-result.component.html',
  styleUrls: ['./vote-result.component.css']
})
export class VoteResultComponent implements OnInit {

  constructor(public voteManagerService: VoteManagerService) { }

  ngOnInit(): void {

  }

}
