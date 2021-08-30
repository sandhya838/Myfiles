import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { ConfirmDialogModel,ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddEditStatusComponent } from '../add-edit-status/add-edit-status.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

interface SelectItem {
  item_id: number;
  item_text: string;
}

@Component({
  selector: 'app-show-status',
  templateUrl: './show-status.component.html',
  styleUrls: ['./show-status.component.css']
})
export class ShowStatusComponent implements OnInit {
  dropdownSettings: IDropdownSettings={};
  amstatus: SelectItem[]=[];
  selectedAMStatus: SelectItem[]=[];
  selectedLunchStatus: SelectItem[]=[];
  selectedPMStatus: SelectItem[]=[];

  constructor(private service:SharedService
            ,public dialog:MatDialog) { }
      
  BreakStatusList:any=[];

  ModalTitle:string="";
  ActivateAddEditStatusComp:boolean=false;
  loc:any;
  id:any='';

  
  AMBreakStatusFilter:string="";
  LunchBreakStatusFilter:string="";
  PMBreakStatusFilter:string="";
  LocationFilter:string="";
  BreakStatusListWithoutFilter:any=[];
  

  ngOnInit(): void {
    this.amstatus = [
      { item_id: 1, item_text: 'Taken' },
      { item_id: 2, item_text: 'Ready' },
      { item_id: 3, item_text: 'Missed' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableCheckAll: true,
      allowSearchFilter: true,
      itemsShowLimit: 3
    };
    this.refreshBreakStatusList();
    this.id=setInterval(() => {
      this.refreshBreakStatusList();
    },60000)
  }

  ngOnDestroy() {
    if(this.id) {
      clearInterval(this.id);
    }

  }

  addClick(){
    debugger
    this.loc={
      BreakStatusId:0,
      Location:"",
      Staff:"",
      AM_Break_Status:"",
      Lunch_Break_Status:"",
      PM_Break_Status:""
     }
     const dialogConfig = new MatDialogConfig();
     dialogConfig.direction = "ltr";
     dialogConfig.autoFocus = true;
     dialogConfig.width = "50%";
     dialogConfig.height = "65%";
     dialogConfig.panelClass = "my-full-screen-dialog"
    //  dialogConfig.data = {       
    //    statusid: item.BreakStatusId 
    //  }
     const dialogRef = this.dialog.open(AddEditStatusComponent, dialogConfig);
     return dialogRef.afterClosed().subscribe(result => this.refreshBreakStatusList()); 

  }

  editClick(item){
    this.service.updateBreakStatus(item).subscribe(res=>{
      
      });
    
  }

  deleteClick(item){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.direction = "ltr";
      dialogConfig.autoFocus = true;
      dialogConfig.width = "22%";
      dialogConfig.height = "25%";
      dialogConfig.panelClass = "my-full-screen-dialog"
      dialogConfig.data = {       
        statusid: item.BreakStatusId 
      }
      const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);
      return dialogRef.afterClosed().subscribe(result => this.refreshBreakStatusList()); 
  }

  closeClick(){
    this.refreshBreakStatusList();
  }

  refreshBreakStatusList(){
    
    this.service.getBreakStatusList().subscribe(data=>{
      
      this.BreakStatusList=data;
      this.BreakStatusListWithoutFilter=data;
  });
// this.onsubmit();
}

  FilterFn(){
    var AMBreakStatusFilter = this.AMBreakStatusFilter;
    var LunchBreakStatusFilter = this.LunchBreakStatusFilter;
    var PMBreakStatusFilter = this.PMBreakStatusFilter;
    var LocationFilter = this.LocationFilter;

    this.BreakStatusList=this.BreakStatusListWithoutFilter.filter(function(el){
       return el.AM_Break_Status.toString().toLowerCase().includes(
        AMBreakStatusFilter.toString().trim().toLowerCase()
      )&&
      el.Lunch_Break_Status.toString().toLowerCase().includes(
        LunchBreakStatusFilter.toString().trim().toLowerCase()
      )&&
      el.PM_Break_Status.toString().toLowerCase().includes(
        PMBreakStatusFilter.toString().trim().toLowerCase()
      )&&
      el.Location.toString().toLowerCase().includes(
        LocationFilter.toString().trim().toLowerCase()
      )
    });

  }

  onSelectAll(items: any) {
    console.log(items);
  }
  onsubmit(){
    let AMArray: string[] = [];
    let LunchArray: string[] = [];
    let PMArray: string[] = [];
    let amstatus='';
      if (this.selectedAMStatus.toString() == '') amstatus = '-'; else {
       for (let i = 0; i < this.selectedAMStatus.length; i++) {
        AMArray.push(this.selectedAMStatus[i].item_text);
        if(i==0) amstatus = this.selectedAMStatus[i].item_text;
        else amstatus = amstatus + ';' + this.selectedAMStatus[i].item_text;
      }
      }
    let lunchstatus='';
      if (this.selectedLunchStatus.toString() == '') lunchstatus = '-'; else {
         for (let i = 0; i < this.selectedLunchStatus.length; i++) {
          LunchArray.push(this.selectedLunchStatus[i].item_text);
          if(i==0) lunchstatus = this.selectedLunchStatus[i].item_text;
          else lunchstatus = lunchstatus + ';' + this.selectedLunchStatus[i].item_text;
        }
        }
    let pmstatus='';
        if (this.selectedPMStatus.toString() == '') pmstatus = '-'; else {
           for (let i = 0; i < this.selectedPMStatus.length; i++) {
            PMArray.push(this.selectedPMStatus[i].item_text);
            if(i==0) pmstatus = this.selectedPMStatus[i].item_text;
            else pmstatus = pmstatus + ';' + this.selectedPMStatus[i].item_text;
        }
        }

        this.service.LoadBreakStatusWithFilters(amstatus,lunchstatus,pmstatus
        ).subscribe(data => {
      this.BreakStatusList = data;
      
    });
  }
  
}
