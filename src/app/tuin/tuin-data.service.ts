import { Injectable } from '@angular/core';
import {Tuin} from './tuin/tuin.model';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { map, tap, delay, catchError, shareReplay, switchMap } from 'rxjs/operators';
import { TuinModule } from './tuin.module';

@Injectable({
  providedIn: 'root'
})
export class TuinDataService {
  private _tuinen$ = new BehaviorSubject<Tuin[]>([]);
  private _tuinen: Tuin[];
  private _reloadTuinen$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {
    this.tuinen$
    .pipe(
      catchError((err) => {
        //temp fix for behavioursubject
        this._tuinen$.error(err);
        return throwError(err);
      })
    )
    .subscribe((tuinen: Tuin[]) => {
      this._tuinen = tuinen;
      this._tuinen$.next(this._tuinen);
    })
   }

  get allTuinen$(): Observable<Tuin[]>{
    return this.tuinen$;
  }

  get tuinen$(): Observable<Tuin[]> {
    return this.http.get(`${environment.apiUrl}/tuinen/`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Tuin[] => list.map(Tuin.fromJSON))
    );
  }

  getTuinen$(naam?: string) {
    return this._reloadTuinen$.pipe(
      switchMap(() => this.fetchTuinen$(naam))
    );
  }

  fetchTuinen$(naam?: string)
  {
    let params = new HttpParams();
    params = naam ? params.append('naam', name) : params;
    return this.http.get(`${environment.apiUrl}/tuinen/`, { params }).pipe(
      catchError(this.handleError),
      map((list: any[]): Tuin[] => list.map(Tuin.fromJSON))
    );
  }

  getTuin$(id: string): Observable<Tuin>{
    return this.http
    .get(`${environment.apiUrl}/tuinen/${id}`)
    .pipe(
      catchError(this.handleError), 
      map(Tuin.fromJSON)
    );
  }

  addNewTuin(tuin: Tuin) {
    return this.http
      .post(`${environment.apiUrl}/tuinen/`, tuin.toJSON())
      .pipe(catchError(this.handleError), map(Tuin.fromJSON))
      .pipe(
        // temporary fix, while we use the behaviorsubject as a cache stream
        catchError((err) => {
          this._tuinen$.error(err);
          return throwError(err);
        }),
        tap((tui: Tuin) => {
          this._tuinen = [...this._tuinen, tui];
          this._tuinen$.next(this._tuinen);
        })
      );
  }

  deleteTuin(tuin: Tuin) {
    return this.http
      .delete(`${environment.apiUrl}/tuinen/${tuin.id}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError))
      .subscribe(() => {
        this._reloadTuinen$.next(true);
      });
  }


  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err instanceof HttpErrorResponse) {
      console.log(err);
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = err;
    }
    return throwError(errorMessage);
  }
}
