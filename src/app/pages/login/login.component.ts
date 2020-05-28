import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {v4 as uuidv4} from 'uuid';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';

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
              private ngxUiLoaderService: NgxUiLoaderService,
              private toastrService: ToastrService,
              public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // username: ['surath@wisdomtoolz.com', [Validators.required]],
      username: ['myadmin@gmail.com', [Validators.required]],
      // username: ['maran@gmail.com', [Validators.required]],
      // password: ['superadmin', [Validators.required]],
      password: ['myadmin', [Validators.required]],
      // password: ['maran', [Validators.required]],
      remember: ['remember'],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  convertWWW(obj) {
    const str = [];
    // tslint:disable-next-line:forin
    for (const p in obj) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
    return str.join('&');
  }

  requestLogin() {
    localStorage.clear();
    this.ngxUiLoaderService.start();
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent('simtuitive:secret')))
    };
    const payload = {
      grant_type: 'password',
      ...this.loginForm.value
    };

    const data = this.convertWWW(payload);
    console.log(payload);
    console.log(data);
    this.authService.login(data, headers).subscribe((res: any) => {
      console.log(res);
      if (res.error) {
        this.ngxUiLoaderService.stop();
        this.toastrService.warning(res.message);

      } else {
        const token = res.token_type + ' ' + res.access_token;
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', res.refresh_token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('tokenType', res.token_type);
        this.authService.isLoggedIn();
        // this.ngxUiLoaderService.stop();
        window.location.href = '/';
      }

    }, error => {
      console.log(error);
      this.ngxUiLoaderService.stop();
    });
  }


}
