import { Component, OnInit } from '@angular/core';
import {TuinDataService} from '../tuin-data.service';
import {Tuin} from '../tuin/tuin.model';
import { Subject, Observable, empty, EMPTY } from 'rxjs';
import { distinctUntilChanged, debounceTime,
  map, filter, catchError, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tuin-list',
  templateUrl: './tuin-list.component.html',
  styleUrls: ['./tuin-list.component.css']
})
export class TuinListComponent {
  
  public filterTuinNaam: string = '';
  public tuinen: Tuin[];
  public filterTuin$ = new Subject<string>();
  //private _fetchTuinen$: Observable<Tuin[]>;
  public errorMessage: string = '';

  constructor(
    private _tuinDataService: TuinDataService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.filterTuin$
      .pipe(distinctUntilChanged(), debounceTime(250))
      .subscribe((val) => {
        const params = val ? { queryParams: { filter: val } } : undefined;
        this._router.navigate(['/tuin/list'], params);
      });

    this._route.queryParams
      .pipe(
        switchMap((newParams) => {
          // set the value of the input field with the url parameter as well
          if (newParams['filter']) {
            this.filterTuinNaam = newParams['filter'];
          }
          // when the queryparameter changes, take the filter parameter and use it to ask
          // the service for all recipes with this filter in their name
          // this._recipeDataService.getRecipes$(params['filter']).subscribe(
          return this._tuinDataService.getTuinen$(newParams['filter']);
        })
      )
      .pipe(
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      )
      .subscribe((val) => {
        this.tuinen = val;
      });
  }


   ngOnInit(): void {  
  }

  applyFilter(filter: string) {
    this.filterTuinNaam = filter;
  }

  //get tuinen$():  Observable<Tuin[]> {
   // return this._fetchTuinen$;
 // }

  addNewTuin(tuin){
    this._tuinDataService.addNewTuin(tuin);
  }
}
