import { Component, OnInit } from '@angular/core';
import {CommentHistoryService} from '../../shared/service/comment-history.service';

@Component({
  selector: 'app-comment-history',
  templateUrl: './comment-history.component.html',
  styleUrls: ['./comment-history.component.css']
})
export class CommentHistoryComponent implements OnInit {
  public today: Date;
  constructor(
    public commentHistoryService: CommentHistoryService
  ) { }

  ngOnInit(): void {
    this.today = new Date();
  }

}
