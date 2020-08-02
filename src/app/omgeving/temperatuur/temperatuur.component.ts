import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperatuur',
  templateUrl: './temperatuur.component.html',
  styleUrls: ['./temperatuur.component.css']
})
export class TemperatuurComponent implements OnInit {

  datum: Date;
  waarde: number;

  constructor() {
      this.datum = new Date();
      this.waarde = 21;
  }

  ngOnInit(): void {
  }

}
