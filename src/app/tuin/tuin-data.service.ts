import { Injectable } from '@angular/core';
import {Tuin} from './tuin/tuin.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, delay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TuinDataService {

  constructor(private http: HttpClient) { }

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
    //this._tuinen = [...this._tuinen, tuin];
    throw 'not implemented yet';
  }
}
