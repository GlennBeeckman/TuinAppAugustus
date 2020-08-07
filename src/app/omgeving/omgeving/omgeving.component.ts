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

  // Start Grafiek Temperatuur
  public lineChartOptionsTemperatuur = { 
    responsive: true
  }

  //data komt uiteindelijk uit omgeving.temperaturen.waarde (this.temperaturen)
  public lineChartDataTemperatuur: ChartDataSets[] = [
    //{ data:this.temperaturen, label: 'Temperatuur' }
      { data: [17.4375, 16.375, 16.1875, 16.375, 16.875, 19.375, 18.75, 20, 20.812], label: 'Temperatuur' }

  ];

  //data komt uiteindelijk uit omgeving.temperaturen.datum (this.datums)
  public lineChartLabelsTemperatuur: Label[] = ['2020-03-10T10:34:52', '2020-03-10 07:48:06', '2020-03-10 04:59:41', '2020-03-10 02:11:08',
   '2020-03-09 23:22:56', '2020-03-09 20:34:31', '2020-03-09 17:46:18', '2020-03-09 17:07:36', '2020-03-09 16:50:09'];

  public lineChartColorsTemperatuur: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(244,122,47,0.3)',
    },
  ];
  public lineChartLegendTemperatuur = true;
  public lineChartTypeTemperatuur = 'line';
  // Einde grafiek temperatuur

 // Grafiek Luchtdruk 
  public lineChartOptionsLuchtdruk = { 
    responsive: true
  }

  //data moet komen uit omgeving.luchtdrukken.waarde (this.luchtdrukken)
  public lineChartDataLuchtdruk: ChartDataSets[] = [
    //{ data: this.luchtdrukken, label: 'Luchtdruk' }
    { data: [1005.49, 1005.49, 1005.49, 1005.49, 1005.49, 1005.49, 1005.49, 1005.49, 1005.49], label: 'Luchtdruk' }

  ];

  //dit worden de datums van de omgeving.luchtdrukken.datum of temperatuur datums (zijn dezelfde -> this.datums)
  public lineChartLabelsLuchtdruk: Label[] = 
  ['2020-03-10T10:34:52', '2020-03-10 07:48:06', '2020-03-10 04:59:41', '2020-03-10 02:11:08',
   '2020-03-09 23:22:56', '2020-03-09 20:34:31', '2020-03-09 17:46:18', '2020-03-09 17:07:36', '2020-03-09 16:50:09'];

  public lineChartColorsLuchtdruk: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(114,206,227,0.3)',
    },
  ];
  public lineChartLegendLuchtdruk = true;
  public lineChartTypeLuchtdruk = 'line';
// Einde grafiek luchtdruk


// ik krijg hier steeds de melding dat this.omgeving undefined is.
// om probleem te reproduceren neem je de statische data van de grafiek weg
 get temperaturen(): number[]{
    let waarden;
    this.omgeving.temperaturen.forEach(temp => {
      waarden += temp.waarde.valueOf();
    });
    return waarden;
  }

  //waarschijnlijk hetzelfde probleem hier
  get luchtdrukken(): number[]{
    let waarden;
    this.omgeving.luchtdrukken.forEach(lucht => {
      waarden += lucht.waarde.valueOf();
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
