import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoplayMatchService {
  API_URL = "http://localhost:8080/leagueManager/UEFA/match/random-match"
  
  constructor(public httpClient : HttpClient) { 
  
  }
  addAMatch():Observable<any>{
    return this.httpClient.get(`${this.API_URL}`);
    //return this.httpClient.get(`https://run.mocky.io/v3/1ef802fd-133a-43bf-938a-5fb1b35d44e8`);
  }

}
