import { Component, OnInit, Input } from '@angular/core';
import {Tuin} from './tuin.model';

@Component({
  selector: 'app-tuin',
  templateUrl: './tuin.component.html',
  styleUrls: ['./tuin.component.css']
})
export class TuinComponent implements OnInit {

  @Input() public tuin: Tuin;

  constructor() {
   }

  ngOnInit(): void {
  }

}
