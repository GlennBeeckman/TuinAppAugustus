import { Component, OnInit } from '@angular/core';
import { FOTOS } from '../foto/mock-fotos';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {
  private _fotos = FOTOS;

  constructor() { }

  ngOnInit(): void {
  }

  get fotos() {
    return this._fotos;
  }

}
