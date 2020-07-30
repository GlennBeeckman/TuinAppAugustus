import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Tuin} from '../tuin/tuin.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit() {
    this.newTuin.emit(new Tuin(this.tuin.value.name));
  }

  getErrorMessage(errors: any): string {
    if (errors.required) {
      return 'Verplicht veld';
    } else if (errors.minlength) {
      return `heeft minstens ${errors.minlength.requiredLength} 
         tekens nodig`;
    }
  }

}
