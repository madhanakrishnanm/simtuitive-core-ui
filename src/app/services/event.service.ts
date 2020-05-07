import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  event: any = [];
  constructor() { }
  addEvent(payload) {
    this.event = payload;
  }
  // @ts-ignore
  getEventsDetails(): Observable<any[]> {
    return of(this.event);
  }
}
