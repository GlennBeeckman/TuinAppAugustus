import { Component, OnInit } from '@angular/core';
import { TuinComponent } from '../tuin/tuin.component';
import {TUINEN} from '../tuin/mock-tuinen';

@Component({
  selector: 'app-tuin-list',
  templateUrl: './tuin-list.component.html',
  styleUrls: ['./tuin-list.component.css']
})
export class TuinListComponent implements OnInit {
  private _tuinen = TUINEN;

  constructor() { }

  get tuinen() {
    return this._tuinen;
  }

  ngOnInit(): void {
  }

}
