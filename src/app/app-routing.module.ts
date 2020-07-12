import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentComponent} from './comment-page/comment/comment.component';
import {CommentHistoryComponent} from './history-page/comment-history/comment-history.component';

const routes: Routes = [
  {path: 'comments', component: CommentComponent},
  {path: 'history', component: CommentHistoryComponent},
  {path: '', redirectTo: '/comments', pathMatch: 'prefix'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
