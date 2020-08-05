import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatuurComponent} from './temperatuur/temperatuur.component';
import {LuchtdrukComponent} from './luchtdruk/luchtdruk.component';
import {FotoComponent} from './foto/foto.component';
import {OmgevingComponent} from './omgeving/omgeving.component';
import { MaterialModule } from '../material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OmgevingListComponent } from './omgeving-list/omgeving-list.component';
import { FotoListComponent } from './foto-list/foto-list.component';
import { TemperatuurListComponent } from './temperatuur-list/temperatuur-list.component';
import { LuchtdrukListComponent } from './luchtdruk-list/luchtdruk-list.component';



@NgModule({
  declarations: [
    TemperatuurComponent,
    LuchtdrukComponent,
    FotoComponent,
    OmgevingComponent,
    OmgevingListComponent,
    FotoListComponent,
    TemperatuurListComponent,
    LuchtdrukListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [OmgevingListComponent]
})
export class OmgevingModule { }
