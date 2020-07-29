import { Component, OnInit } from '@angular/core';
import {TuinDataService} from '../tuin-data.service';
import {Tuin} from '../tuin/tuin.model';

@Component({
  selector: 'app-tuin-list',
  templateUrl: './tuin-list.component.html',
  styleUrls: ['./tuin-list.component.css']
})
export class TuinListComponent {
  
  constructor(private _tuinDataService: TuinDataService) { }
  public filterTuinNaam: string;

  get tuinen(): Tuin[] {
    return this._tuinDataService.tuinen;
  }

  applyFilter(filter: string) {
    this.filterTuinNaam = filter;
  }

  addNewTuin(tuin){
    this._tuinDataService.addNewTuin(tuin);
  }


}
