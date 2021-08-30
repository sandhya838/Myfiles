import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://23.95.228.167:8080/auth/leaderboard"
  constructor(private http: HttpClient) { }
  usergetData(){
    return this.http.get(this.url)
  }
}
