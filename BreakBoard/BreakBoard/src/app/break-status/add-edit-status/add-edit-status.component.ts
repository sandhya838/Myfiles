import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SharedService} from 'src/app/shared.service';


interface SelectItem {
  item_id: number;
  item_text: string;
}

@Component({
  selector: 'app-add-edit-status',
  templateUrl: './add-edit-status.component.html',
  styleUrls: ['./add-edit-status.component.css']
})
export class AddEditStatusComponent implements OnInit {

  public BreakStatusId:string="";
  public Location:string="";
  public Staff:string="";
  public AM_Break_Status:string="";
  public Lunch_Break_Status:string="";
  public PM_Break_Status:string="";

  constructor(public dialogRef: MatDialogRef<AddEditStatusComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service:SharedService) { }

   ngOnInit(): void {
  
   }
  
  
  addBreakStatus(){
    
    var val = {BreakStatusId:this.BreakStatusId,
               Location:this.Location,
               Staff:this.Staff,
               AM_Break_Status:this.AM_Break_Status,
               Lunch_Break_Status:this.Lunch_Break_Status,
               PM_Break_Status:this.PM_Break_Status};
    if(this.Location!=""){
  this.service.addBreakStatus(val).subscribe(res=>{
     this.dialogRef.close(true);
  });
 }
 else{
   alert("Fields cannot be empty!")
 }
  }
}
