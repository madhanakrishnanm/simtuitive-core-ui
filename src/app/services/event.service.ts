import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  event: any = [];
  constructor() { }
  addEvent(payload) {
    this.event = payload;
  }
  getEventsDetails() {
    return this.event;
  }
}
