import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryTableComponent } from './event-summary-table.component';

describe('EventSummaryTableComponent', () => {
  let component: EventSummaryTableComponent;
  let fixture: ComponentFixture<EventSummaryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
