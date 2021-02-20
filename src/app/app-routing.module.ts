import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"league-table",
    loadChildren: () => import('./league-table/league-table.module').then(m => m.LeagueTableModule)
  },
  {
    path:"matches",
    loadChildren: () => import('./matches/matches.module').then(m => m.MatchesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
