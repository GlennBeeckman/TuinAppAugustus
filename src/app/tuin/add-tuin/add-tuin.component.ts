import { TuinDataService } from './../tuin-data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tuin } from '../tuin/tuin.model';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { Plant } from '../plant/plant.model';
import { debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

function validatePlantNaam(control: FormGroup): { [key: string]: any } {
  if(
    control.get('dagenTotOogst').value.length >= 1 &&
    control.get('naam').value.length < 2
  )
  {
    return {plantNoName: true};
  }
  return null;
}


@Component({
  selector: 'app-add-tuin',
  templateUrl: './add-tuin.component.html',
  styleUrls: ['./add-tuin.component.css']
})
export class AddTuinComponent implements OnInit {

  public tuin: FormGroup;
  public errorMessage: string = '';
  public confirmationMessage: string = '';


  constructor(
    private fb: FormBuilder,
    private _tuinDataService: TuinDataService
  ) { }

  get planten(): FormArray {
    return <FormArray>this.tuin.get('planten');
  }

  ngOnInit() {
    this.tuin = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(2)]],
      planten: this.fb.array([this.createPlanten()]),
    });

    this.planten.valueChanges
    .pipe(debounceTime(400), distinctUntilChanged())
    .subscribe((plList) => {
      // if the last entry's name is typed, add a new empty one
      // if we're removing an entry's name, and there is an empty one after that one, remove the empty one
      const lastElement = plList[plList.length - 1];
      if (lastElement.naam && lastElement.naam.length > 2) {
        this.planten.push(this.createPlanten());      
      } else if (plList.length >= 2) {
        const secondToLast = plList[plList.length - 2];
        if (
          !lastElement.naam &&
          !lastElement.datumGeplant &&
          !lastElement.dagenTotOogst &&
          (!secondToLast.naam || secondToLast.naam.length < 2)
        ) {
          this.planten.removeAt(this.planten.length - 1);
        } 
      }
    });
}

createPlanten(): FormGroup {
  return this.fb.group({
    naam: [''],
    datumGeplant: [''],
    dagenTotOogst: [''],
  },
  { validator: validatePlantNaam }
  );
}

onSubmit() {
  let planten = this.tuin.value.planten.map(Plant.fromJSON);  
  planten = planten.filter((pl) => pl.naam.length > 2);
    this._tuinDataService
      .addNewTuin(new Tuin(this.tuin.value.naam, planten))
      .pipe(
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      )
      .subscribe((tui: Tuin) => {
        this.confirmationMessage = `a tuin for ${tui.naam} was successfully added`;
      });

  this.tuin = this.fb.group({
    naam: ['', [Validators.required, Validators.minLength(2)]],
    planten: this.fb.array([this.createPlanten()]),
  });
}

  getErrorMessage(errors: any): string {
    if(!errors)
    {
      return null;
    }
    if (errors.required) {
      return 'Verplicht veld';
    } else if (errors.minlength) {
      return `heeft minstens ${errors.minlength.requiredLength} 
         tekens nodig`;
    } else if(errors.plantNoName) {
      return `als dagen tot oogst ingevuld is moet er ook een naam ingevuld worden`;
    }
  }
}


