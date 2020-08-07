import { Component, OnInit, Input } from '@angular/core';
import { OmgevingDataService } from '../omgeving-data.service';
import { Omgeving } from './omgeving.model';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Temperatuur } from '../temperatuur/temperatuur.model';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-omgeving',
  templateUrl: './omgeving.component.html',
  styleUrls: ['./omgeving.component.css']
})
export class OmgevingComponent implements OnInit {
  @Input() public omgeving: Omgeving;

  constructor(private _omgevingDataService:OmgevingDataService) { }

  public lineChartOptions = { 
    responsive: true
  }

  public lineChartDataTemperatuur: ChartDataSets[] = [
    { data: null, label: 'Temperaturen' }
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

 get temperaturen(): number[]{
    let waarden;
    this.omgeving.temperaturen.forEach(temp => {
      waarden += temp.waarde.valueOf();
    });
    return waarden;
  }

  get datums(): string[]{
    let dates;
    this.omgeving.temperaturen.forEach(temp => {
      let datum = temp.datum.getFullYear.toString();
      datum.concat(`+ ${temp.datum.getMonth.toString()}`);
      datum.concat(`+ ${temp.datum.getDay.toString()}`);
      datum.concat(`+ ${temp.datum.getHours.toString()}`);
      dates += datum;
    });
    return dates;
  }

  ngOnInit(): void {

  }

}
