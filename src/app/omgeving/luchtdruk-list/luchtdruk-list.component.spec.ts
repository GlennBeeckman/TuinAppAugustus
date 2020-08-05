import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuchtdrukListComponent } from './luchtdruk-list.component';

describe('LuchtdrukListComponent', () => {
  let component: LuchtdrukListComponent;
  let fixture: ComponentFixture<LuchtdrukListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuchtdrukListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuchtdrukListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
