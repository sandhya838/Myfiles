import { Component, OnInit } from '@angular/core';
import {Student} from '../module/student'

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})

export class IdCardComponent implements OnInit {
  students:Student[]=[
    {
    fName:"Sandesh",
    lName:"Erande",
    mobile:8888008685,
    age:25,
    class:"SY-MBA",
    rno:"F-222",
    year:"2020-21",
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
    age:22,
    rno:"A-102",
    class:"TY-BBA",
    year:"2020-21",
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
    age:22,
    rno:"SG-722",
    year:"2020-21",
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

  constructor() { }

  ngOnInit(): void {
  }

}
