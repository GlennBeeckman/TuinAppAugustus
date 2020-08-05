import { Component, OnInit, Input } from '@angular/core';
import { Luchtdruk } from './luchtdruk.model';

@Component({
  selector: 'app-luchtdruk',
  templateUrl: './luchtdruk.component.html',
  styleUrls: ['./luchtdruk.component.css']
})
export class LuchtdrukComponent implements OnInit {
  @Input() public luchtdruk: Luchtdruk;

  constructor() {
   }

  ngOnInit(): void {
  }

}
