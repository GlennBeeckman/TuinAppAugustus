import { Injectable } from '@angular/core';
import { OmgevingComponent } from './omgeving/omgeving.component';
import { Omgeving } from './omgeving/omgeving.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, map, catchError, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OmgevingDataService {
  private _omgevingen$ = new BehaviorSubject<Omgeving[]>([]);
  private _omgevingen: Omgeving[];

  constructor(private http: HttpClient) {
    this.omgevingen$
    .pipe(
      catchError(err => {
        //temp fix for behavioursubject
        this._omgevingen$.error(err);
        return throwError(err);
      })
    )
    .subscribe((omgevingen: Omgeving[]) => {
      this._omgevingen = omgevingen;
      this._omgevingen$.next(this._omgevingen);
    })
   }

   get allOmgevingen$(): Observable<Omgeving[]>{
     return this.omgevingen$;
   }

   get omgevingen$(): Observable<Omgeving[]> {
    return this.http.get(`${environment.apiUrl}/omgeving/`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Omgeving[] => list.map(Omgeving.fromJSON))
    );
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
