import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {RoleService} from '../../services/role.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {

  adminId = null;
  subscribe = null;
  admin: any = {};
  adminForm: FormGroup;
  roles = [];
  isLoading = false;
  constructor(public router: Router,
              public route: ActivatedRoute,
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
    });
    this.subscribe = this.route.params.subscribe(params => {

      this.adminId = params.id; // (+) converts string 'id' to a number
      // console.log(this.organizationId);
      if (this.adminId) {
        const payload = {
          userId: this.adminId
        };
        this.adminService.getAdminById(payload).subscribe((res: any) => {
          console.log(res);
          const admin = res.data;
          this.admin.name = admin.userName;
          this.admin.email = admin.userEmail;
          this.roleService.getAllRole({}).subscribe((res: any) => {
            console.log(res);
            this.roles = res.data;
            this.admin.role = this.roles.find(o => o.rolename === admin.role)
            this.adminForm.patchValue(this.admin);
            this.isLoading = false;
          }, error => {
            this.isLoading = false;
          });
        }, error => {
          this.ngxUiLoaderService.stop();
        });
      }

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


  onSubmit() {

    if (this.adminForm.invalid) {
      return;
    }
    // this.ngxUiLoaderService.start();
    let payload = this.adminForm.value;
    payload['role'] = payload['role']['rolename'];
    payload['userId'] = this.adminId;
    console.log(payload);
    this.adminService.editAdmin(payload).subscribe((res: any)=>{
      this.ngxUiLoaderService.stop();
      this.router.navigate(['/admins'])
      console.log(res);
    }, error => {
      console.log(error);
      this.ngxUiLoaderService.stop();
    })
  }

}
