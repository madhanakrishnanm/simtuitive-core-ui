import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoleService} from '../../services/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  roleForm: FormGroup;

  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.roleForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  get f() {
    return this.roleForm.controls;
  }

  onSubmit() {
    if (this.roleForm.invalid) {
      return;
    }
    console.log(this.roleForm.value);
    const payload = this.roleForm.value;
    this.roleService.addRole(payload).subscribe((res: any) => {
      console.log(res);
    });
  }
}
