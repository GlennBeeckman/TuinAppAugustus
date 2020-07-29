import { Injectable } from '@angular/core';
import { TUINEN } from './tuin/mock-tuinen';
import {Tuin} from './tuin/tuin.model';

@Injectable({
  providedIn: 'root'
})
export class TuinDataService {
  private _tuinen = TUINEN;

  constructor() { }

  get tuinen(): Tuin[] {
    return this._tuinen;
  }

  addNewTuin(tuin: Tuin) {
    this._tuinen.push(tuin);
  }
}
