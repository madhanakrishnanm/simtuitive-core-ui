import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private apiService: ApiService) { }

  addRole(payload) {
    return this.apiService.post('roles/add-role', payload);
  }
  editRole(payload) {
    return this.apiService.put('roles/update-role', payload);
  }
  getAllRole(payload) {
    return this.apiService.get('roles/get-all-role', payload);
  }
  getRoleById(payload) {
    return this.apiService.post('roles/get-role', payload);
  }
}
