import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Tuin} from '../tuin/tuin.model';
import {Plant} from '../plant/plant.model';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-add-tuin',
  templateUrl: './add-tuin.component.html',
  styleUrls: ['./add-tuin.component.css']
})
export class AddTuinComponent implements OnInit {
  public tuin: FormGroup;
  @Output() public newTuin = new EventEmitter<Tuin>();

  constructor(private fb: FormBuilder) { }

  get planten(): FormArray {
    return <FormArray>this.tuin.get('planten');
  }

  ngOnInit(): void {
    this.tuin = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      planten: this.fb.array([this.createPlanten()])
    });

    this.planten.valueChanges
    .pipe(debounceTime(400), distinctUntilChanged())
    .subscribe(plList => {
      // if the last entry's name is typed, add a new empty one
      // if we're removing an entry's name, and there is an empty one after that one, remove the empty one
      const lastElement = plList[plList.length - 1];

      if (lastElement.name && lastElement.name.length > 2) {
        this.planten.push(this.createPlanten());
      } else if (plList.length >= 2) {
        const secondToLast = plList[plList.length - 2];
        if (
          !lastElement.name &&
          !lastElement.amount &&
          !lastElement.unit &&
          (!secondToLast.name || secondToLast.name.length < 2)
        ) {
          this.planten.removeAt(this.planten.length - 1);
        }
      }
    });
}

createPlanten(): FormGroup {
  return this.fb.group({
    naam: ['', Validators.required],
    datumGeplant: ['2020-02-07T18:25:43.511Z'],
    dagenTotOogst: ['']
  });
}

onSubmit() {
  let planten = this.tuin.value.planten.map(Plant.fromJSON);
  planten = planten.filter(pl => pl.naam.length > 2);
  this.newTuin.emit(new Tuin(this.tuin.value.name, planten));
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
