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
import { VoteCardComponent } from './comment-page/vote/vote-card/vote-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VoteResultComponent } from './comment-page/vote/vote-result/vote-result.component';
import { ConfigComponent } from './comment-page/config/config/config.component';
import {ColorSketchModule} from 'ngx-color/sketch';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    VoteComponent,
    VoteCardComponent,
    VoteResultComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    BrowserAnimationsModule,
    ColorSketchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
