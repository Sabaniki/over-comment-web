import { Component, OnInit } from '@angular/core';
import {CommentHistoryService} from '../../shared/service/comment-history.service';

@Component({
  selector: 'app-comment-history-card',
  templateUrl: './comment-history-card.component.html',
  styleUrls: ['./comment-history-card.component.css']
})
export class CommentHistoryCardComponent implements OnInit {
  constructor(
    public commentHistoryService: CommentHistoryService,
  ) { }

  ngOnInit(): void {
  }

}
