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
    return this.apiService.put('permissions/update-permission',payload);
  }
  getAllPermission(payload){
    return this.apiService.get('permissions/get-permissions',payload);
  }
  getPermissionById(payload){
    return this.apiService.post('permissions/get-permission',payload);
  }
  getPermissionRoles(payload){
    return this.apiService.post('permissions/get-permission-roles',payload);
  }
  deletePermission(payload){
    return this.apiService.delete('permissions/delete-permission',payload);
  }
  findPermissionType(payload){
    return this.apiService.get('permissions/find-permission-type',payload);
  }
}
