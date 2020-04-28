import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:any = {};
  constructor(public apiService: ApiService) { }

  getUser(){
    return this.apiService.get('users/get-user')
  }
  getDashboard(){
    return this.apiService.get('users/dashboard')
  }
  getProductUsers(){
    return this.apiService.get('users/product-users')
  }
}
