import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PollListComponent } from './components/poll-list/poll-list.component';
import { PollComponent } from './components/poll/poll.component';
import { PollReponesComponent } from './pages/poll-repones/poll-repones.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PollOnlyResponseComponent } from './components/poll-only-response/poll-only-response.component';
import { poll } from './services/Poll.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PollListComponent,
    PollComponent,
    PollReponesComponent,
    NotFoundComponent,
    PollOnlyResponseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [poll],
  bootstrap: [AppComponent]
})
export class AppModule { }
