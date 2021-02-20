import { Component, OnInit } from '@angular/core';
import { MatchLogService } from 'src/app/services/matchService/match-log.service';

@Component({
  selector: 'app-view-matches-log',
  templateUrl: './view-matches-log.component.html',
  styleUrls: ['./view-matches-log.component.css']
})
export class ViewMatchesLogComponent implements OnInit {
  title = "Match Log";
  matchLogDetails : any = [];
  responseStatus : boolean = false;
  
  constructor(public matchLogService: MatchLogService) { }

  ngOnInit(): void {
      this.getMatchLog("*");
  }

  getMatchLog(playedDate){
    this.responseStatus = false;
    this.matchLogDetails=null;
    this.matchLogService.getMatchLog(playedDate).subscribe((data)=>{
      this.matchLogDetails = data;
      console.log(this.matchLogDetails);
      if(this.matchLogDetails.status == "success"){
        this.responseStatus = true;
      }
      console.log(this.responseStatus)
    });
  }
  btnOnClickSearch(playedDate){
    let x = playedDate.split("-",3);
    console.log(x[0],x[1],x[2]);
    //x[0] -- yr
    //x[1] -- month
    //x[2] -- date
    //alert(`${x[2]}-${x[1]}-${x[0]}`);
    this.getMatchLog(`${x[2]}-${x[1]}-${x[0]}`);
  }
  btnOnClickReset(){
    this.getMatchLog("*");
  }
}
