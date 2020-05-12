import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
@Component({
  selector: 'app-event-summary-table',
  templateUrl: './event-summary-table.component.html',
  styleUrls: ['./event-summary-table.component.scss']
})
export class EventSummaryTableComponent implements OnInit {
   eventDetails: any = [];
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
     this.eventService.getEventsDetails().subscribe((res) => {
       this.eventDetails = res;
       console.log(this.eventDetails);
     });
  }

}
