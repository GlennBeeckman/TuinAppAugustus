import { Component, OnInit } from '@angular/core';
import {TuinDataService} from '../tuin-data.service';
import {Tuin} from '../tuin/tuin.model';
import { Subject, Observable, empty, EMPTY } from 'rxjs';
import { distinctUntilChanged, debounceTime,
  map, filter, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-tuin-list',
  templateUrl: './tuin-list.component.html',
  styleUrls: ['./tuin-list.component.css']
})
export class TuinListComponent {
  
  public filterTuinNaam: string;
  public filterTuin$ = new Subject<string>();
  private _fetchTuinen$: Observable<Tuin[]>;
  public errorMessage: string = '';

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

   ngOnInit(): void {
    this._fetchTuinen$ = this._tuinDataService.allTuinen$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    )
  }

  applyFilter(filter: string) {
    this.filterTuinNaam = filter;
  }

  get tuinen$():  Observable<Tuin[]> {
    return this._fetchTuinen$;
  }

  addNewTuin(tuin){
    this._tuinDataService.addNewTuin(tuin);
  }
}
