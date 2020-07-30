import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Tuin} from '../tuin/tuin.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-tuin',
  templateUrl: './add-tuin.component.html',
  styleUrls: ['./add-tuin.component.css']
})
export class AddTuinComponent implements OnInit {
  public tuin: FormGroup;
  @Output() public newTuin = new EventEmitter<Tuin>();

  constructor() { }

  ngOnInit(): void {
    this.tuin = new FormGroup({
      name: new FormControl('witte bloempot')
    })
  }

  onSubmit() {
    this.newTuin.emit(new Tuin(this.tuin.value.name));
  }

}
