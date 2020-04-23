import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private apiService: ApiService) { }

  addAdmin(payload){
    return this.apiService.post('users/add-user',payload);
  }
  editAdmin(payload){
    return this.apiService.post('users/update-user',payload);
  }
  getAllAdmin(payload){
    return this.apiService.get('org/getall-admin',payload);
  }
  getAdminById(payload){
    return this.apiService.post('org/get-admin',payload);
  }

}
