import { Component, OnInit } from '@angular/core';
import { AutoplayMatchService} from 'src/app/services/matchService/autoplay-match.service';
@Component({
  selector: 'app-auto-play',
  templateUrl: './auto-play.component.html',
  styleUrls: ['./auto-play.component.css']
})
export class AutoPlayComponent implements OnInit {
  title = 'Auto-Play';
  matchDetails : any = [];
  showMatchDetailsDiv : boolean = false;
  

  constructor(public autoplayMatchService : AutoplayMatchService) { }

  ngOnInit(): void {
    this.showMatchDetailsDiv = false;
  }

  PlayAutomatedMatch(){
      this.matchDetails = [];
      this.autoplayMatchService.addAMatch().subscribe((data)=>{
      this.matchDetails = data;
      console.log(this.matchDetails);
      if(this.matchDetails.team1 != null){
        this.showMatchDetailsDiv = true;
      }
    });
  }

  onBtnClick(){
    this.showMatchDetailsDiv = false;
    this.PlayAutomatedMatch();
  }
}
