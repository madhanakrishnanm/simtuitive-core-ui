import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from "../../services/event.service";
import {BookingService} from "../../services/booking.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(public router: Router,
              private eventService: EventService,
              private bookingService: BookingService,
  ) {
  }

  active = 1;
  events = [];
  selectedEvents = [];
  ngOnInit(): void {
    this.eventService.getAllEvents({}).subscribe((res: any) => {
      console.log(res);
      this.events = res.data;
      this.filterEventsByStatus('UpComing')
    });
  }

  onTabChange(tab) {
    if (tab.nextId === 1){
      this.filterEventsByStatus('UpComing');
    }else if (tab.nextId === 2){
      this.filterEventsByStatus('InProgress');
    }else if (tab.nextId === 3){
      this.filterEventsByStatus('Completed');
    }
    console.log(tab);
  }
  filterEventsByStatus(status){
    this.selectedEvents = [];
    this.events.forEach((event) => {
      if (event.status === status){
        this.selectedEvents.push(event);
      }
    });
  }
}
