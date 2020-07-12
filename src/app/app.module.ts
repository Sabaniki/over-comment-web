import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CommentComponent} from './comment-page/comment/comment.component';
import {RouterModule} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {firebaseConfig} from '../environments/firebase.secret';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VoteComponent} from './comment-page/vote/vote.component';
import {VoteCardComponent} from './comment-page/vote/vote-card/vote-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VoteResultComponent} from './comment-page/vote/vote-result/vote-result.component';
import {ConfigComponent} from './comment-page/config/config/config.component';
import {ColorSketchModule} from 'ngx-color/sketch';
import {CommentHistoryComponent} from './history-page/comment-history/comment-history.component';
import {registerLocaleData} from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import { CommentHistoryCardComponent } from './history-page/comment-history-card/comment-history-card.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';

registerLocaleData(localeJa);

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    VoteComponent,
    VoteCardComponent,
    VoteResultComponent,
    ConfigComponent,
    CommentHistoryComponent,
    CommentHistoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    BrowserAnimationsModule,
    ColorSketchModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-US'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
