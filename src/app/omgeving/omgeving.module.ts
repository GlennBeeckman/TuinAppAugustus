import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatuurComponent} from './temperatuur/temperatuur.component';
import {LuchtdrukComponent} from './luchtdruk/luchtdruk.component';
import {FotoComponent} from './foto/foto.component';
import {OmgevingComponent} from './omgeving/omgeving.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    TemperatuurComponent,
    LuchtdrukComponent,
    FotoComponent,
    OmgevingComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [OmgevingComponent]
})
export class OmgevingModule { }
