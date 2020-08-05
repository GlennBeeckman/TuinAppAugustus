import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuinListComponent } from './tuin/tuin-list/tuin-list.component';
import { RouterModule, Routes } from '@angular/router';
import { OmgevingListComponent } from './omgeving/omgeving-list/omgeving-list.component';


const appRoutes: Routes = [
  { path: 'tuin/lijst', component: TuinListComponent },
  { path: 'tuin/omgeving', component: OmgevingListComponent },
  { path: '', redirectTo: 'tuin/lijst', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
