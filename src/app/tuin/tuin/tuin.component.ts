import { Component, OnInit, Input } from '@angular/core';
import {Tuin} from './tuin.model';
import { TuinDataService } from '../tuin-data.service';

@Component({
  selector: 'app-tuin',
  templateUrl: './tuin.component.html',
  styleUrls: ['./tuin.component.css']
})
export class TuinComponent implements OnInit {

  @Input() public tuin: Tuin;

  constructor(private _tuinDataService: TuinDataService) {
   }

  ngOnInit(): void {
  }

  deleteTuin(){
    this._tuinDataService.deleteTuin(this.tuin);
  }

}
