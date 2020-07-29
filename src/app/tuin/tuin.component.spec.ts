import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuinComponent } from './tuin.component';

describe('TuinComponent', () => {
  let component: TuinComponent;
  let fixture: ComponentFixture<TuinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
