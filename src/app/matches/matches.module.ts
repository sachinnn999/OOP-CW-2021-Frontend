import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { AutoPlayComponent } from './auto-play/auto-play.component';
import { ViewMatchesLogComponent } from './view-matches-log/view-matches-log.component';


@NgModule({
  declarations: [AutoPlayComponent, ViewMatchesLogComponent],
  imports: [
    CommonModule,
    MatchesRoutingModule
  ]
})
export class MatchesModule { }
