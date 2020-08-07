import { Component, OnInit } from '@angular/core';
import {TuinDataService} from '../tuin-data.service';
import {Tuin} from '../tuin/tuin.model';
import { Subject, Observable, empty, EMPTY } from 'rxjs';
import { distinctUntilChanged, debounceTime,
  map, filter, catchError } from 'rxjs/operators';
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

    this._route.queryParams.subscribe((params) => {
      this._tuinDataService
        .getTuinen$(params['filter'])
        .pipe(
          catchError((err) => {
            this.errorMessage = err;
            return EMPTY;
          })
        )
        .subscribe((val) => {
          this.tuinen = val;
        });
      if (params['filter']) {
        this.filterTuinNaam = params['filter'];
      }
    });
  }

   ngOnInit(): void {  
  }

  applyFilter(filter: string) {
    this.filterTuinNaam = filter;
  }

  //get tuinen$():  Observable<Tuin[]> {
  //  return this._fetchTuinen$;
 // }

  addNewTuin(tuin){
    this._tuinDataService.addNewTuin(tuin);
  }
}
