import { Component, OnInit } from '@angular/core';
import { TEMPERATUREN } from '../temperatuur/mock-temperaturen';

@Component({
  selector: 'app-temperatuur-list',
  templateUrl: './temperatuur-list.component.html',
  styleUrls: ['./temperatuur-list.component.css']
})
export class TemperatuurListComponent implements OnInit {
  private _temperaturen = TEMPERATUREN

  constructor() { }

  get temperaturen(){
    return this._temperaturen;
  }

  ngOnInit(): void {
  }

}
