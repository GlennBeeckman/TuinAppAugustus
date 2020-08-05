import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Omgeving } from '../omgeving/omgeving.model';
import { OmgevingDataService } from '../omgeving-data.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-omgeving-list',
  templateUrl: './omgeving-list.component.html',
  styleUrls: ['./omgeving-list.component.css']
})
export class OmgevingListComponent {

  private _fetchOmgevingen$: Observable<Omgeving[]>;
  public errorMessage: string = '';

  constructor(private _omgevingDataService: OmgevingDataService) { }

  ngOnInit(): void {
    this._fetchOmgevingen$ = this._omgevingDataService.allOmgevingen$.pipe(
      catchError( err => {
        this.errorMessage = err;
        return EMPTY;
      })
    )
  }

  get omgevingen$(): Observable<Omgeving[]> {
    return this._fetchOmgevingen$;
  }
}
