import { Component, OnInit } from '@angular/core';
import { OmgevingDataService } from '../omgeving-data.service';
import { Omgeving } from './omgeving.model';

@Component({
  selector: 'app-omgeving',
  templateUrl: './omgeving.component.html',
  styleUrls: ['./omgeving.component.css']
})
export class OmgevingComponent implements OnInit {

  constructor(private _omgevingDataService:OmgevingDataService) { }

  get omgevingen(): Omgeving[] {
    return this._omgevingDataService.omgevingen;
  }

  ngOnInit(): void {
  }

}
