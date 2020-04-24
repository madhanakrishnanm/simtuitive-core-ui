import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private apiService: ApiService) { }

  addClient(payload) {
    return this.apiService.post('org/add-client', payload);
  }
  editClient(payload) {
    return this.apiService.post('org/update-client', payload);
  }
  getAllClient(payload) {
    return this.apiService.get('org/getall-clients', payload);
  }
  getClientById(payload) {
    return this.apiService.post('org/get-client', payload);
  }
}
