import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PermissionService} from '../../services/permission.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {RoleService} from '../../services/role.service';
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.scss']
})
export class AddPermissionComponent implements OnInit {
  permissionForm: FormGroup;
  isOpen = false;
  applicableTo: any = [{value: 'Admin', label: 'Admin'}, {value: 'Client', label: 'Client'}, {value: 'Learner', label: 'Learner'}];
  roles = [];
  isLoading = false;
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private ngxUiLoaderService: NgxUiLoaderService,
              private roleService: RoleService,
              private toastrService: ToastrService,
              private permissionService: PermissionService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.permissionForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      rank: [0, [Validators.required]],
      description: ['', [Validators.required]],
      roleIds: ['', [Validators.required]]
    });
    this.roleService.getAllRole({}).subscribe((res: any) => {
      console.log(res);
      this.roles = res.data;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  get f() {
    return this.permissionForm.controls;
  }

  selectPermission(option) {
    console.log(option);
    console.log(this.permissionForm.value);
  }

  onSubmit() {
    if (this.permissionForm.invalid) {
      return;
    }
    const roleIds = this.f.roleIds.value;
    const newRoles = [];
    for (const role of roleIds) {
      newRoles.push(role.roleId);
    }

    this.ngxUiLoaderService.start();
    const payload = {...this.permissionForm.value, roleIds: newRoles};
    console.log(payload);
    this.permissionService.addPermission(payload).subscribe((res: any) => {
      this.ngxUiLoaderService.stop();
      this.router.navigate(['/permissions']);
      // console.log(res);
    }, error => {
      if (error.error.userMessage){
        this.toastrService.warning(error.error.userMessage);
      }else {
        this.toastrService.warning('Something went to be wrong!');
      }
      this.ngxUiLoaderService.stop();
    });
  }
}
