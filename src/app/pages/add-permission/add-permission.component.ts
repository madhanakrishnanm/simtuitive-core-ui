import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PermissionService} from '../../services/permission.service';
import {IOption} from 'ng-select';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {RoleService} from '../../services/role.service';

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
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private ngxUiLoaderService: NgxUiLoaderService,
              private roleService: RoleService,
              private permissionService: PermissionService) {
  }

  ngOnInit(): void {
    this.permissionForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      applicableTo: ['', [Validators.required]]
    });
    this.roleService.getAllRole({}).subscribe((res: any) => {
      console.log(res);
      this.roles = res.data;
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
    this.ngxUiLoaderService.start();
    console.log(this.permissionForm.value);
    const payload = this.permissionForm.value;
    this.permissionService.addPermission(payload).subscribe((res: any) => {
      this.ngxUiLoaderService.stop();
      // this.router.navigate(['/admins'])
      console.log(res);
    }, error => {
      console.log(error);
      this.ngxUiLoaderService.stop();
    });
  }
}
