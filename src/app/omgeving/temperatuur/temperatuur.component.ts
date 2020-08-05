import { Component, OnInit, Input } from '@angular/core';
import { Temperatuur } from './temperatuur.model';

@Component({
  selector: 'app-temperatuur',
  templateUrl: './temperatuur.component.html',
  styleUrls: ['./temperatuur.component.css']
})
export class TemperatuurComponent implements OnInit {

  @Input() public temperatuur: Temperatuur;

  constructor() { }

  ngOnInit(): void {
  }

}
