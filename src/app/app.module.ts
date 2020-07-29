import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TuinComponent } from './tuin/tuin.component';
import { PlantComponent } from './plant/plant.component';

@NgModule({
  declarations: [
    AppComponent,
    TuinComponent,
    PlantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
