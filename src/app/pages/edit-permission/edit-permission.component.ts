import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PermissionService} from '../../services/permission.service';

@Component({
  selector: 'app-edit-permission',
  templateUrl: './edit-permission.component.html',
  styleUrls: ['./edit-permission.component.scss']
})
export class EditPermissionComponent implements OnInit {
  permissionForm: FormGroup;
  isOpen = false;
  applicableTo: any = [{value: 'Admin', label: 'Admin'}, {value: 'Client', label: 'Client'}, {value: 'Learner', label: 'Learner'}];
  roleId = null;
  subscribe = null;
  permission: any = {};
  constructor(public router: Router,
              public route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private permissionService: PermissionService) {
  }

  ngOnInit(): void {
    this.permissionForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      applicableTo: ['', [Validators.required]]
    });
    this.subscribe = this.route.params.subscribe(params => {
      this.roleId = params.id; // (+) converts string 'id' to a number
      // console.log(this.organizationId);
      if (this.roleId) {
        const payload = {
          roleId: this.roleId
        };
        this.permissionService.getPermissionById(payload).subscribe((res: any) => {
          // console.log(res);
          const responseRole = res.data;
          this.permission.name = responseRole.name;
          this.permission.description = responseRole.description;
          this.permissionForm.patchValue({applicableTo: ['Client']});
        });
      }

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
    console.log(this.permissionForm.value);
    const payload = this.permissionForm.value;
    this.permissionService.editPermission(payload).subscribe((res: any) => {
      console.log(res);
    });
  }
}
