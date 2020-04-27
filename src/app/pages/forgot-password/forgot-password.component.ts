import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router) {
  }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      username: ['surath@wisdomtoolz.com', [Validators.required]]
    });
  }

  requestPassword() {
    console.log(this.forgotForm.value);
    this.router.navigate(['/update-password']);
  }

}
