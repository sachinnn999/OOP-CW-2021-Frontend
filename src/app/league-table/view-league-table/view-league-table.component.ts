import { Component, OnInit } from '@angular/core';
import { LeagueTableService } from 'src/app/services/leagueTableService/league-table.service';

@Component({
  selector: 'app-view-league-table',
  templateUrl: './view-league-table.component.html',
  styleUrls: ['./view-league-table.component.css']
})
export class ViewLeagueTableComponent implements OnInit {
  title = 'Sort by Points';
  sortByPoints = 1;
  sortByGoals = 2;
  sortByWins = 3;
  clubLevel : any = [];
  schoolLevel : any = [];
  universityLevel : any = [];
  constructor(public leagueTableService : LeagueTableService) { }

  ngOnInit(): void {
    this.getLeagueTable(this.sortByPoints);
  }
  
  getLeagueTable(sortingMethod){
    this.leagueTableService.getLeagueTableBySortingMethod(sortingMethod).subscribe((data)=>{
      console.log(data);
      this.clubLevel = data.clubLevel;
      this.schoolLevel= data.schoolLevel;
      this.universityLevel = data.universityLevel;
    });
  }

  onSortBtnClick(sortingMethod){
    this.selectPageTitle(sortingMethod);
    this.getLeagueTable(sortingMethod);
  }

  selectPageTitle(sortingMethod){
      if(sortingMethod == this.sortByPoints){
          this.title = "Sort by Points";
      }else if(sortingMethod == this.sortByGoals){
        this.title = "Sort by Goals";
      }else if(sortingMethod == this.sortByWins){
        this.title = "Sort by Wins";
      }
  }

}
