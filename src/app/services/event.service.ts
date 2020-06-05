import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ApiService} from "./api.service";
@Injectable({
  providedIn: 'root'
})
export class EventService {
  event: any = [];

  constructor(private apiService: ApiService) { }

  addEvent(payload) {
    return this.apiService.post('events/add-event', payload);
  }
  editEvent(payload) {
    return this.apiService.put('events/update-event', payload);
  }
  getAllEvents(payload) {
    return this.apiService.get('events/get-all-event', payload);
  }
  getEventById(payload) {
    return this.apiService.get('events/get-event-id', payload);
  }
  deleteEvent(payload) {
    return this.apiService.delete('events/delete-event', payload);
  }
}
