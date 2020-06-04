import { Component, OnInit } from '@angular/core';
import {BookingService} from "../../services/booking.service";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  active = 1;
  bookings = [];
  selectedBookings = [];
  constructor(private bookingService: BookingService,
              private eventService: EventService) {
  }

  ngOnInit(): void {
    this.bookingService.getAllBooking({}).subscribe((res: any) => {
      console.log(res);
      this.bookings = res.data;
      this.filterEventsByStatus('Pending');
    });
    /*this.eventService.getEventById({id: "5ed65b16e570f63225040a64"}).subscribe((res: any) => {
      console.log(res);
    });*/

  }

  onTabChange(tab) {
    console.log(tab);
    if (tab.nextId === 1){
      this.filterEventsByStatus('Pending');
    }else if (tab.nextId === 2){
      this.filterEventsByStatus('Approved');
    }else if (tab.nextId === 3){
      this.filterEventsByStatus('Rejected');
    }else if (tab.nextId === 4){
      this.filterEventsByStatus('Canceled');
    }
  }

  filterEventsByStatus(status){
    this.selectedBookings = [];
    this.bookings.forEach((booking) => {
      if (booking.status === status){
        this.selectedBookings.push(booking);
      }
    });
    console.log(this.selectedBookings);
  }
}
