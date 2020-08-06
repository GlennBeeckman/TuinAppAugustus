import { Component, OnInit, Input } from '@angular/core';
import { OmgevingDataService } from '../omgeving-data.service';
import { Omgeving } from './omgeving.model';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-omgeving',
  templateUrl: './omgeving.component.html',
  styleUrls: ['./omgeving.component.css']
})
export class OmgevingComponent implements OnInit {
  @Input() public omgeving: Omgeving;

  public lineChartOptions = { 
    responsive: true
  }

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';


  constructor(private _omgevingDataService:OmgevingDataService) { }

  ngOnInit(): void {
  }

}
