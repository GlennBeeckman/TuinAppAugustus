import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TuinModule } from './tuin/tuin.module';
import { MaterialModule } from './material/material.module';
import { OmgevingModule } from './omgeving/omgeving.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuinModule,
    MaterialModule,
    OmgevingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
