import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmgevingListComponent } from './omgeving-list.component';

describe('OmgevingListComponent', () => {
  let component: OmgevingListComponent;
  let fixture: ComponentFixture<OmgevingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmgevingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmgevingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
