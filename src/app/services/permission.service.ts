import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private apiService: ApiService) { }

  addPermission(payload){
    return this.apiService.post('permissions/add-permission',payload);
  }
  editPermission(payload){
    return this.apiService.post('permissions/update-permission',payload);
  }
  getAllPermission(payload){
    return this.apiService.get('permissions/get-permissions',payload);
  }
  getPermissionById(payload){
    return this.apiService.post('permissions/get-permission',payload);
  }
}
