import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { UserService } from '../servicesLine/user.service';
import { UseractivityService } from '../servicesLine/useractivity.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private post:UserService ,private get:UseractivityService) { }
userData:any={};
popupData2:any={};
  ngOnInit(): void {
    this.post.usergetData().subscribe((response)=>{
      this.userData=response;
    })

    this.get.activitypostData(this.popupData2).subscribe((Response1)=>{
      this.popupData2=Response1;
    console.log(this.popupData2);
    
    
    })
  }

}
