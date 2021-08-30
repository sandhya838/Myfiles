import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Users from '../userData';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  users: Users[]=[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
    url='http://23.95.228.167:8080/auth/leaderboard';
  getData(){
    this.httpClient.get<any>(this.url).subscribe(
      
        response=>{
          console.log(response);
          this.users=response;
          
        
      }
    );
  }
}
