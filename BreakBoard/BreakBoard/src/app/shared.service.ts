import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //readonly APIUrl="http://mhavwpwebsmnc01:90/api";
  readonly APIUrl="http://localhost:52379/api";

  constructor(private http:HttpClient) { }

  getBreakStatusList():Observable<any[]>{
    
    return this.http.get<any>(this.APIUrl+'/BreakStatus/breaklist');
  }

  addBreakStatus(val:any){
    
    return this.http.post(this.APIUrl+'/BreakStatus',val);
  }

  updateBreakStatus(val:any){
    return this.http.put(this.APIUrl+'/BreakStatus',val);
  }

  deleteBreakStatus(val:any){
    return this.http.delete(this.APIUrl+'/BreakStatus/'+val);
  }

  LoadBreakStatusWithFilters(amstatus,lunchstatus,pmstatus): Observable<any> {
    return this.http.get(this.APIUrl + '/BreakStatus/breaklistWithFilters/amstatus/' + amstatus + '/lunchstatus/' + lunchstatus + '/pmstatus/' + pmstatus);
  }

}
