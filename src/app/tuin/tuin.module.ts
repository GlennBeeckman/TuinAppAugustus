import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuinComponent} from './tuin/tuin.component';
import {PlantComponent} from './plant/plant.component';
import { MaterialModule } from '../material/material.module';
import { TuinListComponent } from './tuin-list/tuin-list.component';
import { AddTuinComponent } from './add-tuin/add-tuin.component';
import { TuinFilterPipe } from './tuin-filter.pipe';
import { PlantListComponent } from './plant-list/plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { OmgevingListComponent } from '../omgeving/omgeving-list/omgeving-list.component';
import { TuinDetailComponent } from './tuin-detail/tuin-detail.component';
import { TuinResolver } from '../tuin-resolver.service';

const routes: Routes = [
  { path: 'list', component: TuinListComponent },
  { path: 'omgeving', component: OmgevingListComponent },
  { path: 'detail/:id', component: TuinDetailComponent,
  resolve: { tuin: TuinResolver },
},
]


@NgModule({
  declarations: [
    TuinComponent, 
    PlantComponent, 
    TuinListComponent, 
    AddTuinComponent, 
    TuinFilterPipe, 
    PlantListComponent, 
    TuinDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule, 
    MaterialModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [AddTuinComponent, TuinListComponent]
})
export class TuinModule { }
