import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreakStatusComponent } from './break-status/break-status.component';
import { ShowStatusComponent } from './break-status/show-status/show-status.component';
import { AddEditStatusComponent } from './break-status/add-edit-status/add-edit-status.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ConfirmDialogComponent } from './break-status/confirm-dialog/confirm-dialog.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    BreakStatusComponent,
    ShowStatusComponent,
    AddEditStatusComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //NgbModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCheckboxModule,
    NgMultiSelectDropDownModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
  
})
export class AppModule { }
