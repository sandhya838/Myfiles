import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseractivityService {

  constructor( private http:HttpClient) { }
  activitypostData(stravaId:any)
  {
    // var url=`http://23.95.228.167:8080/api//getUserActivities/${stravaId}`;
    var activityurl='http://23.95.228.167:8080/api//getUserActivities/ '
    // return this.http.get(url);
    return this.http.get(activityurl);
  }
}
