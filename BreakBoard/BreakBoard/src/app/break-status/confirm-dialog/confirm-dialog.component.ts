import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SharedService} from 'src/app/shared.service';

export interface DialogData {
  statusid: number;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

   statusid:number=0;
   
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service:SharedService) {
      this.statusid=data.statusid;
    }

    onConfirm(): void {
      this.service.deleteBreakStatus(this.statusid).subscribe(data=>{
      
         });
         this.dialogRef.close(true);
    }

    onDismiss(): void {
      this.dialogRef.close(true);
    }

    ngOnInit(): void {
    }

}

export class ConfirmDialogModel {
      constructor(public title:string,public message:string,public data:string){}
}
