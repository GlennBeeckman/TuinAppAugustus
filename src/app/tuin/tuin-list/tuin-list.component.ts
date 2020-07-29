import { Component, OnInit } from '@angular/core';
import {TUINEN} from '../tuin/mock-tuinen';
import {Tuin} from '../tuin/tuin.model';

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

  addNewTuin(tuin: Tuin) {
    this._tuinen.push(tuin);
  }

  ngOnInit(): void {
  }

}
