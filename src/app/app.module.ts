import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LeagueTableModule } from './league-table/league-table.module';
import { MatchesModule } from './matches/matches.module';

import { AutoplayMatchService } from './services/matchService/autoplay-match.service';
import { MatchLogService } from './services/matchService/match-log.service';
import { LeagueTableService } from './services/leagueTableService/league-table.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeagueTableModule,
    MatchesModule
  ],
  providers: [
    LeagueTableService,
    AutoplayMatchService,
    MatchLogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
