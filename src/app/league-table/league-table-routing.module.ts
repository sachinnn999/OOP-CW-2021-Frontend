import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';

const routes: Routes = [
  {path:'view', component:ViewLeagueTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueTableRoutingModule { }
