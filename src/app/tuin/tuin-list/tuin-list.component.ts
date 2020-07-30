import { Component, OnInit } from '@angular/core';
import {TuinDataService} from '../tuin-data.service';
import {Tuin} from '../tuin/tuin.model';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime,
  map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-tuin-list',
  templateUrl: './tuin-list.component.html',
  styleUrls: ['./tuin-list.component.css']
})
export class TuinListComponent {
  
  public filterTuinNaam: string;
  public filterTuin$ = new Subject<string>();
  private _fetchTuinen$: Observable<Tuin[]> = this._tuinDataService.tuinen$;

  constructor(private _tuinDataService: TuinDataService) {
    this.filterTuin$
    .pipe(
      distinctUntilChanged(),
      debounceTime(200),
      map(val => val.toLowerCase())
    )
    .subscribe(
      val => this.filterTuinNaam = val
    );
   }

  get tuinen$():  Observable<Tuin[]> {
    return this._fetchTuinen$;
  }

  applyFilter(filter: string) {
    this.filterTuinNaam = filter;
  }

  addNewTuin(tuin){
    this._tuinDataService.addNewTuin(tuin);
  }


}
