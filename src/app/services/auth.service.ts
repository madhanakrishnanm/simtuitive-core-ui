import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from './api.service';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
              private apiService: ApiService
  ) { }

  sendToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    let isValidToken = false;
    if (localStorage.getItem('token')) {
      const targetTime = moment(localStorage.getItem('expiresAt'));
      const currentTime = moment();
      isValidToken = currentTime.valueOf() < targetTime.valueOf();
    }
    return isValidToken;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['Login']);
  }

  login(payload, headers) {
    return this.apiService.auth('oauth/token', payload, headers);
  }

}
