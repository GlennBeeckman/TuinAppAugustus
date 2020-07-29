import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuinComponent} from './tuin/tuin.component';
import {PlantComponent} from './plant/plant.component';
import { MaterialModule } from '../material/material.module';
import { TuinListComponent } from './tuin-list/tuin-list.component';



@NgModule({
  declarations: [TuinComponent, PlantComponent, TuinListComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [TuinListComponent]
})
export class TuinModule { }
