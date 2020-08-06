import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuinDetailComponent } from './tuin-detail.component';

describe('TuinDetailComponent', () => {
  let component: TuinDetailComponent;
  let fixture: ComponentFixture<TuinDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuinDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
