import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,
              private apiService: ApiService
  ) { }

  sendToken(token: string) {
    localStorage.setItem("token", token)
  }
  getToken() {
    return localStorage.getItem("token")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["Login"]);
  }

  login(payload,headers){
    return this.apiService.auth('oauth/token',payload,headers);
  }

}
