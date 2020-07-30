import { Injectable } from '@angular/core';
import {Tuin} from './tuin/tuin.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { map, tap, delay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TuinDataService {

  private _tuinen$ = new BehaviorSubject<Tuin[]>([]);
  private _tuinen: Tuin[];

  constructor(private http: HttpClient) { 
    this.tuinen$.subscribe((tuinen: Tuin[]) => {
      this._tuinen = tuinen;
      this._tuinen$.next(this._tuinen);
    });
  }

  get allTuinen$(): Observable<Tuin[]>{
    return this.tuinen$;
  }

  get tuinen$(): Observable<Tuin[]> {
    return this.http.get(`${environment.apiUrl}/tuinen/`).pipe(
      catchError(this.handleError),
      tap(console.log),
      map(
        (list: any[]): Tuin[] => list.map(Tuin.fromJSON)
      )
    );
  }

  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = `an unknown error occurred ${err}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  addNewTuin(tuin: Tuin) {
    return this.http.post(`${environment.apiUrl}/tuinen/`, tuin.toJSON())
    .pipe(catchError(this.handleError),
            map(Tuin.fromJSON))
    .subscribe((tui: Tuin) => {
      this._tuinen = [...this._tuinen, tui];
    });
  }
}
