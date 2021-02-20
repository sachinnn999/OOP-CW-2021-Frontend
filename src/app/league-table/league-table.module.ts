import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueTableRoutingModule } from './league-table-routing.module';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';


@NgModule({
  declarations: [
    ViewLeagueTableComponent
  ],
  imports: [
    CommonModule,
    LeagueTableRoutingModule
  ]
})
export class LeagueTableModule { }
