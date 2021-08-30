import { Component, OnInit } from '@angular/core';
import { AthleteService } from '../servicesLine/athlete.service'; 
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
 
  constructor(private getInfo:AthleteService){}
  athlete:any={} ;

  ngOnInit(): void {
    this.getInfo.athletegetData().subscribe((athleteData) =>
    {
      this.athlete=athleteData;
    });

  }

}
