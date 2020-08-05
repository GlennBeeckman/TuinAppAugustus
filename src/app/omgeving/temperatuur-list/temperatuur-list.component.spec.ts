import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatuurListComponent } from './temperatuur-list.component';

describe('TemperatuurListComponent', () => {
  let component: TemperatuurListComponent;
  let fixture: ComponentFixture<TemperatuurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatuurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatuurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
