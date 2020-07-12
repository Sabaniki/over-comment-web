import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CommentComponent} from './comment-page/comment/comment.component';
import {RouterModule} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {firebaseConfig} from '../environments/firebase.secret';
import {FormsModule} from '@angular/forms';
import {VoteComponent} from './comment-page/vote/vote.component';
import {VoteCardComponent} from './comment-page/vote/vote-card/vote-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VoteResultComponent} from './comment-page/vote/vote-result/vote-result.component';
import {ConfigComponent} from './comment-page/config/config/config.component';
import {ColorSketchModule} from 'ngx-color/sketch';
import {CommentHistoryComponent} from './history-page/comment-history/comment-history.component';
import {registerLocaleData} from '@angular/common';
import localeJa from '@angular/common/locales/ja';

registerLocaleData(localeJa);

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    VoteComponent,
    VoteCardComponent,
    VoteResultComponent,
    ConfigComponent,
    CommentHistoryComponent
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
  providers: [
    {provide: LOCALE_ID, useValue: 'ja-JP'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
