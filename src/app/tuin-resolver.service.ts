import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tuin } from './tuin/tuin/tuin.model';
import { TuinDataService } from './tuin/tuin-data.service';

@Injectable({
  providedIn: 'root'
})
export class TuinResolver implements Resolve<Tuin> {
  constructor(private recipeService: TuinDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Tuin> {
    return this.recipeService.getTuin$(route.params['id']);
  }
}
