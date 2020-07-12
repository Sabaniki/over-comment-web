import { Component, OnInit } from '@angular/core';
import {CommentHistoryService} from '../../shared/service/comment-history.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-comment-history',
  templateUrl: './comment-history.component.html',
  styleUrls: ['./comment-history.component.css']
})
export class CommentHistoryComponent implements OnInit {
  constructor(
    public commentHistoryService: CommentHistoryService,
    private router: Router
  ) {
  }

  date = new FormControl(new Date());

  ngOnInit(): void {
    this.commentHistoryService.targetDate = new Date();
  }

  onClickBackCommentPageButton() {
    this.router.navigate(['comments']);
  }

  public updateDate() {
    this.commentHistoryService.changeTargetDate(this.date.value);
  }
}

