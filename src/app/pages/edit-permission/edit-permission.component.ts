import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PermissionService} from '../../services/permission.service';
import {RoleService} from '../../services/role.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-edit-permission',
  templateUrl: './edit-permission.component.html',
  styleUrls: ['./edit-permission.component.scss']
})
export class EditPermissionComponent implements OnInit {
  permissionForm: FormGroup;
  isOpen = false;
  applicableTo: any = [{text: 'Admin', labelTo: 'Admin'}, {text: 'Client', labelTo: 'Client'}, {text: 'Learner', labelTo: 'Learner'}];
  permissionId = null;
  roles = [];
  subscribe = null;
  permission: any = {};

  constructor(public router: Router,
              public route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private roleService: RoleService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private permissionService: PermissionService) {
  }

  ngOnInit(): void {
    this.ngxUiLoaderService.start();
    this.permissionForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      rank: [0, [Validators.required]],
      description: ['', [Validators.required]],
      roleIds: ['', [Validators.required]]
    });
    this.subscribe = this.route.params.subscribe(params => {
      this.permissionId = params.id; // (+) converts string 'id' to a number
      // console.log(this.organizationId);
      if (this.permissionId) {
        const payload = {
          permissionId: this.permissionId
        };
        this.permissionService.getPermissionById(payload).subscribe((res: any) => {
          console.log(res);
          const permission = res.data;
          this.permission.name = permission.name;
          this.permission.type = permission.type;
          this.permission.rank = permission.rank;
          this.permission.description = permission.description;
          this.permission.roleIds = permission.roles;
          this.permissionForm.patchValue(this.permission);
          this.ngxUiLoaderService.stop();
        }, error => {
          this.ngxUiLoaderService.stop();
        });
      }

    });
    this.roleService.getAllRole({}).subscribe((res: any) => {
      this.roles = res.data;
      this.ngxUiLoaderService.stop();
    }, error => {
      this.ngxUiLoaderService.stop();
    });
  }

  get f() {
    return this.permissionForm.controls;
  }

  onSubmit() {
    if (this.permissionForm.invalid) {
      return;
    }
    this.ngxUiLoaderService.start();
    let roleIds = this.f.roleIds.value;
    let newRoles = [];
    for (const role of roleIds) {
      newRoles.push(role['roleId']);
    }

    const payload = {...this.permissionForm.value, roleIds: newRoles, permissionId: this.permissionId};
    // delete payload['roleIds'];
    console.log(payload);
    this.permissionService.editPermission(payload).subscribe((res: any) => {
      this.ngxUiLoaderService.stop();
      this.router.navigate(['/permissions'])
      // console.log(res);
    }, error => {
      console.log(error);
      this.ngxUiLoaderService.stop();
    });
  }
}
