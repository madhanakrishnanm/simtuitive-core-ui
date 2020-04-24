import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleService} from '../../services/role.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {
  roleForm: FormGroup;
  roleId = null;
  subscribe = null;
  role: any = {};

  constructor(public router: Router,
              public route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private ngxUiLoaderService: NgxUiLoaderService,
              private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.roleForm = this.formBuilder.group({
      rolename: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.subscribe = this.route.params.subscribe(params => {
      this.roleId = params.id; // (+) converts string 'id' to a number
      console.log(this.roleId);
      if (this.roleId) {
        const payload = {
          roleid: this.roleId
        };
        this.roleService.getRoleById(payload).subscribe((res: any) => {
          // console.log(res);
          const responseRole = res.data;
          this.role.rolename = responseRole.rolename;
          this.role.description = responseRole.description;
          this.roleForm.patchValue(this.role);
        });
      }

    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  get f() {
    return this.roleForm.controls;
  }

  onSubmit() {
    if (this.roleForm.invalid) {
      return;
    }
    this.ngxUiLoaderService.start();

    const payload = this.roleForm.value;
    payload['roleid'] = this.roleId;
    // console.log(payload);
    this.roleService.editRole(payload).subscribe((res: any) => {
      this.ngxUiLoaderService.stop();
      this.router.navigate(['/roles'])
      // console.log(res);
    }, error => {
      console.log(error);
      this.ngxUiLoaderService.stop();
    });
  }
}
