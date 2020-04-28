import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {RoleService} from '../../services/role.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  adminForm: FormGroup;
  roles = [];
  isLoading = false;
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private adminService: AdminService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private roleService: RoleService
  ) {
  }

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, this.emailValidator]],
      role: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.roleService.getAllRole({}).subscribe((res: any) => {
      console.log(res);
      this.roles = res.data;
      this.adminForm.patchValue({
        role : this.roles.find(o => o.roleName === 'Admin')
      })
      this.isLoading =  false;
    }, error => {
      this.isLoading = false;
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
    let payload = this.adminForm.value;
    payload['roleId'] = payload['role']['roleId'];
    payload['role'] = payload['role']['roleName'];
    console.log(payload);
    this.adminService.addAdmin(payload).subscribe((res: any)=>{
      this.ngxUiLoaderService.stop();
      this.router.navigate(['/admins'])
      console.log(res);
    }, error => {
      console.log(error);
      this.ngxUiLoaderService.stop();
    })
  }

}
