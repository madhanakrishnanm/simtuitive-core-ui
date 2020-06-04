import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  event: any = [];

  constructor(private apiService: ApiService) { }

  addBooking(payload) {
    return this.apiService.post('events/add-booking', payload);
  }
  editBooking(payload) {
    return this.apiService.put('events/edit-booking', payload);
  }
  getAllBooking(payload) {
    return this.apiService.get('events/get-all-booking', payload);
  }
  getBookingById(payload) {
    return this.apiService.get('events/get-booking-id', payload);
  }
  deleteEvent(payload) {
    return this.apiService.delete('events/delete-event', payload);
  }
  updateBookingStatus(payload){
    return this.apiService.put('events/update-booking-action', payload);
  }
}
