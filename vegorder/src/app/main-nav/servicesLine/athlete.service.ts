import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  url1='http://23.95.228.167:8080/api/getDashboardData';
  constructor(private http :HttpClient) {}
      athletegetData(): Observable <any>{
        return this.http.get(this.url1)
      }
 }
    

// console.log(url);