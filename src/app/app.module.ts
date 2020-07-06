import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommentComponent } from './comment-page/comment/comment.component';
import {RouterModule} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {firebaseConfig} from '../environments/firebase.secret';
import {FormsModule} from '@angular/forms';
import { VoteComponent } from './comment-page/vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
