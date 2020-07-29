import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TuinModule } from './tuin/tuin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
