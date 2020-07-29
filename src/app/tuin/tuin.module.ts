import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuinComponent} from './tuin/tuin.component';
import {PlantComponent} from './plant/plant.component';



@NgModule({
  declarations: [TuinComponent, PlantComponent],
  imports: [
    CommonModule
  ],
  exports: [TuinComponent]
})
export class TuinModule { }
