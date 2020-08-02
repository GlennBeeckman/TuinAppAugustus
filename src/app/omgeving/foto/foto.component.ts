import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  datum: Date;
  url: string;

  constructor() { 
    this.datum = new Date;
    this.url = "https://previews.dropbox.com/p/thumb/AA5hFiq-DXHGWzzPjj9G7YjidvrJDDQa-sAwfoiiFQFifqWk0QEgGs71I4fxy0pzJDDjya38inxVyEYEY6Gglbeawr6Ef7duvRljWwQLk-cCv7ry4J5cxWr9Mvs_830psSMAtYFFGQtOwC32RdKSjQp7bQt8_v9lURPXMBRQ8TiC5p83KVFk6AOfbALrGcJ-U4PGCBGsSsRYCBouwHikMqUOEMv0PTFj-ifFukbp--JrJbAH0IxWBx43ky8GwcatoozyVYEvAcbIfFZJJLotmeNHnj2IzVPX7UdsEqembK3G3ELIvXZEfnkJr77c6eCaOgdAPyBSC1BvovVHvDT3iuzvgmnptn4XuKkEewyuxIB81A/p.jpeg?fv_content=true&size_mode=5";
  }

  ngOnInit(): void {
  }

}
