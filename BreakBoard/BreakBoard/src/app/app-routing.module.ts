import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BreakStatusComponent} from './break-status/break-status.component';
import { ShowStatusComponent } from './break-status/show-status/show-status.component';

const routes: Routes = [
  { path: 'showstatus', component: ShowStatusComponent },
  //{ path: '', redirectTo: '/showstatus', pathMatch:'full' },
  { path: '', component: ShowStatusComponent },
  { path: '**', component: ShowStatusComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShowStatusComponent];
