import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
 import { MatSliderModule } from '@angular/material/slider';
 import { FormsModule } from '@angular/forms'; 

 import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Project/navbar/navbar.component';
import { HomeComponent } from './Project/home/home.component';
import { AsideComponent } from './Project/aside/aside.component';
import { MainComponent } from './Project/main/main.component';
import { SideComponent } from './Project/side/side.component';
import { HomepageComponent } from './BootsrtapPractice/homepage/homepage.component';
 import {MatCardModule} from '@angular/material/card';
import {IdCardComponent } from './id-card/id-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { TeacherComponent } from './teacher/teacher.component';
import { SidebarComponent } from './userpannel/sidebar/sidebar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginformComponent } from './login/loginform/loginform.component';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebaruserComponent } from './IAS-Project/sidebaruser/sidebaruser.component';
import { NavbaruserComponent } from './IAS-Project/navbaruser/navbaruser.component';
import{ MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CardsComponent } from './main-nav/cards/cards.component';
import { TableComponent } from './main-nav/table/table.component';
import { AboutComponent } from './IAS-Project/about/about.component';
import { ContactComponent } from './IAS-Project/contact/contact.component';
import { Home1Component } from './IAS-Project/home1/home1.component';

const appRouts:Routes=[
  // {path:'', component: NavbaruserComponent},
  {path:'home', component: Home1Component },
  {path:'about' , component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AsideComponent,
    MainComponent,
    SideComponent,
    HomepageComponent,
    IdCardComponent,
    TeacherComponent,
    SidebarComponent,
    LoginformComponent,
    SidebaruserComponent,
    NavbaruserComponent,
    DashboardComponent,
    MainNavComponent,
    CardsComponent,
    TableComponent,
    AboutComponent,
    ContactComponent,
    Home1Component
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    FormsModule ,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
