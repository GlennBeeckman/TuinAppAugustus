import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luchtdruk',
  templateUrl: './luchtdruk.component.html',
  styleUrls: ['./luchtdruk.component.css']
})
export class LuchtdrukComponent implements OnInit {
  datum: Date;
  waarde: number;

  constructor() {
    this.datum = new Date;
    this.waarde = 2100;
   }

  ngOnInit(): void {
  }

}
