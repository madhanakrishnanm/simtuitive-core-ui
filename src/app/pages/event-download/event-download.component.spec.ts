import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDownloadComponent } from './event-download.component';

describe('EventDownloadComponent', () => {
  let component: EventDownloadComponent;
  let fixture: ComponentFixture<EventDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
