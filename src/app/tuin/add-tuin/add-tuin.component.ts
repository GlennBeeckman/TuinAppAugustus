import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Tuin} from '../tuin/tuin.model';

@Component({
  selector: 'app-add-tuin',
  templateUrl: './add-tuin.component.html',
  styleUrls: ['./add-tuin.component.css']
})
export class AddTuinComponent implements OnInit {
  @Output() public newTuin = new EventEmitter<Tuin>();

  constructor() { }

  ngOnInit(): void {
  }

  addTuin(tuinNaam: HTMLInputElement): boolean {
    const tuin = new Tuin(tuinNaam.value, []);
    this.newTuin.emit(tuin);
    return false;
  }

}
