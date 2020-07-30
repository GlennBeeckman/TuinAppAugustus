import { Component, OnInit, Input } from '@angular/core';
import {Plant} from './plant.model';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  @Input() public plant: Plant;
  
  
  //@Input() public naam: string;
  //@Input() public dagenTotOogst: number;
  //@Input() public datumGeplant: Date;
  //@Input() public oogstDatum: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
