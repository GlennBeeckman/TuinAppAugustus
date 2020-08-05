import { Component, OnInit, Input } from '@angular/core';
import { Foto } from './foto.model';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  @Input() public foto: Foto;


  constructor() { }

  ngOnInit(): void {
  }

}
