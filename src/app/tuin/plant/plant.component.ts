import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  @Input() naam: string;
  @Input() familie: string;
  @Input() datumGeplant;
  @Input() aantalDagenTotOogst: number;
  @Input() wikiLink: string;
  @Input() fotoUrl: string;


  constructor() { }

  ngOnInit(): void {
  }

}
