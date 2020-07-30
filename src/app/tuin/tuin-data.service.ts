import { Injectable } from '@angular/core';
import {Tuin} from './tuin/tuin.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TuinDataService {

  constructor(private http: HttpClient) { }

  get tuinen$(): Observable<Tuin[]> {
    return this.http.get(`${environment.apiUrl}/tuinen/`).pipe(
      tap(console.log),
      map(
        (list: any[]): Tuin[] => list.map(Tuin.fromJSON)
      )
    );
  }

  addNewTuin(tuin: Tuin) {
    //this._tuinen = [...this._tuinen, tuin];
    throw 'not implemented yet';
  }
}
