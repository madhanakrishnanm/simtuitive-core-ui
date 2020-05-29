import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(public router: Router) { }
  events = [
    {
      id: 1,
      name: 'The Last Stand',
      clientName: 'Allianz Cornhill',
      bookingDate: '10/03/2020',
      course: 'Advanced Excel',
      noOfDelegates: 145,
      bookingStatus: 'New Booking',
      startDate: '11/04/2020',
      endDate: '20/07/2020',
      // tslint:disable-next-line:max-line-length
      notes: 'Lorem ips'
    },
    {
      id: 2,
      name: 'CX Grandstand',
      clientName: 'Allianz Cornhill',
      bookingDate: '10/03/2020',
      course: 'Advanced Excel',
      noOfDelegates: 345,
      bookingStatus: 'New Booking',
      startDate: '11/04/2020',
      endDate: '20/07/2020',
      // tslint:disable-next-line:max-line-length
      notes: 'Lorem ips'
    }
  ];
  ngOnInit(): void {
  }

}
