import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuin',
  templateUrl: './tuin.component.html',
  styleUrls: ['./tuin.component.css']
})
export class TuinComponent implements OnInit {
  naam: string;
  planten: string[];
  dateAdded: Date;

  constructor() {
    this.naam = "Vierkante meter tuin";
    this.planten = ["pompoen", "paprika", "pepers"];
    this.dateAdded = new Date();
   }

  ngOnInit(): void {
  }

}
