import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  adminForm: FormGroup;

  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private adminService: AdminService,
              private ngxUiLoaderService: NgxUiLoaderService
  ) {
  }

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, this.emailValidator]],
      role: ['admin', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  emailValidator(formControl: AbstractControl) {
    if (!formControl.parent) {
      return null;
    }
    const email = formControl.parent.get('email').value;
    if (email) {
      if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        return {
          email: {
            email: formControl.parent.get('email').value
          }
        };
      }
    }
    return null;
  }

  get f() {
    return this.adminForm.controls;
  }

  changeStatus(event) {
    console.log(event);
  }

  onSubmit() {

    if (this.adminForm.invalid) {
      return;
    }
    this.ngxUiLoaderService.start();
    console.log(this.adminForm.value);
    let payload = this.adminForm.value;
    this.adminService.addAdmin(payload).subscribe((res: any)=>{
      this.ngxUiLoaderService.stop();
      // this.router.navigate(['/admins'])
      console.log(res);
    }, error => {
      console.log(error);
      this.ngxUiLoaderService.stop();
    })
  }

}
