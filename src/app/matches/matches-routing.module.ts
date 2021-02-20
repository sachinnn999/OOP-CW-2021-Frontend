import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoPlayComponent } from './auto-play/auto-play.component';
import { ViewMatchesLogComponent } from './view-matches-log/view-matches-log.component';

const routes: Routes = [
  {path:'auto-play', component: AutoPlayComponent},
  {path:'matches-log', component: ViewMatchesLogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
