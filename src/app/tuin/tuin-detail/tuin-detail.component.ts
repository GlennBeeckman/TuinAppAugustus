import { Component, OnInit } from '@angular/core';
import { Tuin } from '../tuin/tuin.model';
import { ActivatedRoute } from '@angular/router';
import { TuinDataService } from '../tuin-data.service';

@Component({
  selector: 'app-tuin-detail',
  templateUrl: './tuin-detail.component.html',
  styleUrls: ['./tuin-detail.component.css']
})
export class TuinDetailComponent implements OnInit {

  public tuin: Tuin;

  constructor(
    private route: ActivatedRoute,
    private tuinDataService: TuinDataService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(item => (this.tuin = item['tuin']));
  }

}
