import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuinListComponent } from './tuin/tuin-list/tuin-list.component';
import { RouterModule, Routes } from '@angular/router';
import { OmgevingListComponent } from './omgeving/omgeving-list/omgeving-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectivePreloadStrategy } from './SelectivePreloadStrategy';
import { AuthGuard } from './user/auth.guard';


const appRoutes: Routes = [
  {
    path: 'tuin',
    canActivate: [ AuthGuard ],
    loadChildren: () =>
      import('./tuin/tuin.module').then(mod => mod.TuinModule),
    data: { preload: true }
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: SelectivePreloadStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
