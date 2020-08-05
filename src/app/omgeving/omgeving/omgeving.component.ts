import { Component, OnInit, Input } from '@angular/core';
import { OmgevingDataService } from '../omgeving-data.service';
import { Omgeving } from './omgeving.model';

@Component({
  selector: 'app-omgeving',
  templateUrl: './omgeving.component.html',
  styleUrls: ['./omgeving.component.css']
})
export class OmgevingComponent implements OnInit {
  @Input() public omgeving: Omgeving;


  constructor(private _omgevingDataService:OmgevingDataService) { }

  ngOnInit(): void {
  }

}
