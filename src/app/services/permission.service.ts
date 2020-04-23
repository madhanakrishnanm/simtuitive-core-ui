import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private apiService: ApiService) { }

  addPermission(payload){
    return this.apiService.post('org/add-permission',payload);
  }
  editPermission(payload){
    return this.apiService.post('org/update-permission',payload);
  }
  getAllPermission(payload){
    return this.apiService.get('org/getall-permission',payload);
  }
  getPermissionById(payload){
    return this.apiService.post('org/get-permission',payload);
  }
}
