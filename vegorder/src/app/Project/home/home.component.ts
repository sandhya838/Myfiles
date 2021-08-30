import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {Student} from '../../module/student'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    students:Student[]=[
      {
      fName:"Sandesh",
      lName:"Erande",
      mobile:8888008685,
      year:"2020-21",
      rno:"F-222",
      age:25,
      class:"SY-MBA",
      Subjects:['Marathi','Hindi','Sanskrut','Engish','SocialScience'],
      marks:{
        Marathi:95,
        Hindi:94,
        Sanskrut:88,
        English:80,
        SocialScience:80
      }
    },
    {
      fName:"Saurabh",
      lName:"Erande",
      mobile:8380891905,
      class:"TY-BBA",
      year:"2020-21",
      rno:"A-102",
      age:22,
      Subjects:['Marathi','Hindi','Sanskrut','Engish','SocialScience'],
      marks:{
          Marathi:85,
          Hindi:90,
          Sanskrut:70,
          English:75,
          SocialScience:80
        }
  },
  {
      fName:"Sandhay",
      lName:"Erande",
      mobile:8380891905,
      year:"2020-21",
      age:22,
      rno:"SG-722",
      class:"SY-MCS",
      Subjects:['Marathi','Hindi','Sanskrut','Engish','SocialScience'],
      marks:{
        Marathi:90,
        Hindi:90,
        Sanskrut:89,
        English:90,
        SocialScience:80
      }
    }
  
  ]
  constructor() {
    // console.log(this.students.marks.English);
    
   }

  ngOnInit(): void {
  }
  

  onSubmit(form:NgForm){
    console.log(form);
    
  }
}

