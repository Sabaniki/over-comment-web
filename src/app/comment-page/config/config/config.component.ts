import { Component, OnInit } from '@angular/core';
import {ColorEvent} from 'ngx-color';
import {CommentConfigManagerService} from '../../../shared/service/comment-config-manager.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(public commentConfigManagerService: CommentConfigManagerService) { }

  ngOnInit(): void {
  }

  onChangeColorComplete($event: ColorEvent) {
    this.commentConfigManagerService.fontColor = $event.color.hex;
  }
}
