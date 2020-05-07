import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventSummaryComponent } from './edit-event-summary.component';

describe('EditEventSummaryComponent', () => {
  let component: EditEventSummaryComponent;
  let fixture: ComponentFixture<EditEventSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
