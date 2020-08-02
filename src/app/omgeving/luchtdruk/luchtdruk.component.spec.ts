import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuchtdrukComponent } from './luchtdruk.component';

describe('LuchtdrukComponent', () => {
  let component: LuchtdrukComponent;
  let fixture: ComponentFixture<LuchtdrukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuchtdrukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuchtdrukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
