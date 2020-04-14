import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isValid = true;
  errorMessage = 'Invalid Password. Please Try again.';

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  convertWWW(obj){
    var str = [];
    for(var p in obj)
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&")
  }
  requestLogin() {
    let headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa('simtuitive:secret')
    };
    const payload = {
      grant_type: 'password',
      key_super_key: uuidv4(),
      ...this.loginForm.value
    };

    const data = this.convertWWW(payload);
    const header = new HttpHeaders(headers);
    console.log(data);
    this.authService.login(data,header).subscribe((res: any) => {
      console.log(res);
       const token = res.token_type + ' ' + res.access_token;
       localStorage.setItem('token', token);
       localStorage.setItem('refreshToken', res.refresh_token);
       localStorage.setItem('role', res.role);
       localStorage.setItem('tokenType', res.token_type);
       this.router.navigate(['/'])
    });

  }


}
