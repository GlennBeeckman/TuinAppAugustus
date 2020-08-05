import { Component, OnInit } from '@angular/core';
import { LUCHTDRUKKEN } from '../luchtdruk/mock-luchtdrukken';

@Component({
  selector: 'app-luchtdruk-list',
  templateUrl: './luchtdruk-list.component.html',
  styleUrls: ['./luchtdruk-list.component.css']
})
export class LuchtdrukListComponent implements OnInit {
  private _luchtdrukken = LUCHTDRUKKEN;

  constructor() { }

  get luchtdrukken(){
    return this._luchtdrukken;
  }

  ngOnInit(): void {
  }

}
