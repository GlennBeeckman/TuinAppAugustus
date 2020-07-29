import { Component, OnInit } from '@angular/core';
import {PLANTEN} from '../plant/mock-planten';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  private _planten = PLANTEN;

  constructor() { }

  get planten(){
    return this._planten;
  }

  ngOnInit(): void {
  }

}
