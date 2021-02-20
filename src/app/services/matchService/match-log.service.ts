import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchLogService {
  API_URL = "http://localhost:8080/leagueManager/UEFA/match/log"
  
  constructor(public httpClient : HttpClient) { 
  
  }
  getMatchLog(playedDate):Observable<any>{
    return this.httpClient.get(`${this.API_URL}/${playedDate}`);
    //return this.httpClient.get(`https://run.mocky.io/v3/c938790e-78bb-4a1d-9bda-0cef8bdf98e4`);
  }
}
