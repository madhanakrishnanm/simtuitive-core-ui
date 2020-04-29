import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private apiService: ApiService) { }

  addClient(payload){
    return this.apiService.post('users/add-user',payload);
  }
  editClient(payload){
    return this.apiService.put('users/update-user',payload);
  }
  getAllClient(payload){
    return this.apiService.get('users/get-users-by-role?role=Client',payload);
  }
  getClientById(payload){
    return this.apiService.post('users/get-user-id',payload);
  }
  deleteClient(payload){
    return this.apiService.delete('users/delete-id',payload);
  }
}
