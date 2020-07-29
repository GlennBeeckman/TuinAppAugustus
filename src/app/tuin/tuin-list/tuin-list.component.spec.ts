import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuinListComponent } from './tuin-list.component';

describe('TuinListComponent', () => {
  let component: TuinListComponent;
  let fixture: ComponentFixture<TuinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
