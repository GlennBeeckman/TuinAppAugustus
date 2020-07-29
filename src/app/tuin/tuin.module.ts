import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuinComponent} from './tuin/tuin.component';
import {PlantComponent} from './plant/plant.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [TuinComponent, PlantComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [TuinComponent]
})
export class TuinModule { }
