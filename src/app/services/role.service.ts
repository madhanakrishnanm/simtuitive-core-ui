import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private apiService: ApiService) { }

  addRole(payload) {
    return this.apiService.post('org/add-role', payload);
  }
  editRole(payload) {
    return this.apiService.post('org/update-role', payload);
  }
  getAllRole(payload) {
    return this.apiService.get('org/getall-role', payload);
  }
  getRoleById(payload) {
    return this.apiService.post('org/get-role', payload);
  }
}
