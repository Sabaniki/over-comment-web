import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentConfigManagerService {
  public fontSize: number;
  public fontColor: string;

  constructor() {
    this.fontSize = 32;
    this.fontColor = '#fff';
  }
}
