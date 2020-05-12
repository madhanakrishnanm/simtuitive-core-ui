import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-edit-event-summary',
  templateUrl: './edit-event-summary.component.html',
  styleUrls: ['./edit-event-summary.component.scss']
})
export class EditEventSummaryComponent implements OnInit {
  constructor() { }
  // for trigger next stepper
  ngOnInit(): void {
  }

}
