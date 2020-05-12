import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-event-summary',
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.scss']
})
export class EventSummaryComponent implements OnInit {
  @Output() onStepNext: EventEmitter<any> = new EventEmitter();
  constructor() { }
  // for trigger next stepper
  triggerNext() {
    this.onStepNext.emit();
  }
  ngOnInit(): void {
  }

}
