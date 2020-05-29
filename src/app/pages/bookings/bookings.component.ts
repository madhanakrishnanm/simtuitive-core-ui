import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  active = 1;
  bookings = [
    {
      "id": 1,
      "name": "The Last Stand",
      "clientName": "Allianz Cornhill",
      "bookingDate": "10/03/2020",
      "course": "Advanced Excel",
      "noOfDelegates": 145,
      "bookingStatus": "New Booking",
      "startDate": "11/04/2020",
      "endDate": "20/07/2020",
      "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ?"
    },
    {
      "id": 2,
      "name": "CX Grandstand",
      "clientName": "Allianz Cornhill",
      "bookingDate": "10/03/2020",
      "course": "Advanced Excel",
      "noOfDelegates": 345,
      "bookingStatus": "New Booking",
      "startDate": "11/04/2020",
      "endDate": "20/07/2020",
      "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ?"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
