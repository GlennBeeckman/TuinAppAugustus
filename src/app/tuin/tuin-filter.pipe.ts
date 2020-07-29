import { Pipe, PipeTransform } from '@angular/core';
import {Tuin} from './tuin/tuin.model';

@Pipe({
  name: 'tuinFilter'
})
export class TuinFilterPipe implements PipeTransform {

  transform(tuinen: Tuin[], naam:string): Tuin[] {
    if (!naam || naam.length === 0) {
      return tuinen;
    }
    return tuinen.filter(tui =>
      tui.naam.toLowerCase().startsWith(naam.toLowerCase())
    );
  }

}
