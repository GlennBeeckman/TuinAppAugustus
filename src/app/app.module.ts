import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TuinModule } from './tuin/tuin.module';
import { MaterialModule } from './material/material.module';
import { OmgevingModule } from './omgeving/omgeving.module';
import { RouterModule, Routes } from '@angular/router';
import { TuinListComponent } from './tuin/tuin-list/tuin-list.component';
import { OmgevingComponent } from './omgeving/omgeving/omgeving.component';
import { OmgevingListComponent } from './omgeving/omgeving-list/omgeving-list.component';

const appRoutes: Routes = [
  { path: 'tuin/lijst', component: TuinListComponent },
  { path: 'tuin/omgeving', component: OmgevingListComponent },
  { path: '', redirectTo: 'tuin/lijst', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuinModule,
    MaterialModule,
    OmgevingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
