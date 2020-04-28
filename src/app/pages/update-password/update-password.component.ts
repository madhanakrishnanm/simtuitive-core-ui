import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  updatePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.updatePasswordForm = this.formBuilder.group({
      newPassword: ['surath@wisdomtoolz.com', [Validators.required]],
      repeatPassword: ['surath@wisdomtoolz.com', [Validators.required]]
    });
  }

  requestPassword() {
    console.log(this.updatePasswordForm.value);
  }
}
