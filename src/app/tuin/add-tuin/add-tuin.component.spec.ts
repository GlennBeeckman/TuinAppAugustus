import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTuinComponent } from './add-tuin.component';

describe('AddTuinComponent', () => {
  let component: AddTuinComponent;
  let fixture: ComponentFixture<AddTuinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTuinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTuinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
