import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueTableService {
  API_URL = "http://localhost:8080/leagueManager/UEFA/leagueTable"
  
  constructor(public httpClient : HttpClient) { 
  
  }

  getLeagueTableBySortingMethod(sortingMethod):Observable<any>{
    return this.httpClient.get(`${this.API_URL}/${sortingMethod}`);
    //return this.httpClient.get(`https://run.mocky.io/v3/38746519-b95d-4200-ab18-06fd984b0374`);
  }
}
