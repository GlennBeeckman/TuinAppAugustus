import { Injectable } from '@angular/core';
import { OmgevingComponent } from './omgeving/omgeving.component';
import { Omgeving } from './omgeving/omgeving.model';

@Injectable({
  providedIn: 'root'
})
export class OmgevingDataService {
  private _omgevingen = OMGEVINGEN;

  constructor() {
   }

   get omgevingen(): Omgeving[] {
     return this._omgevingen;
   } 

   
}
