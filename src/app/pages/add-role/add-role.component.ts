import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoleService} from '../../services/role.service';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  roleForm: FormGroup;

  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private toastrService: ToastrService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private roleService: RoleService) {
  }

  ngOnInit(): void {

    this.roleForm = this.formBuilder.group({
      roleName: ['', [Validators.required]],
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
    this.ngxUiLoaderService.start();
    console.log(this.roleForm.value);
    const payload = this.roleForm.value;
    this.roleService.addRole(payload).subscribe((res: any) => {
      this.ngxUiLoaderService.stop();
      this.router.navigate(['/roles'])
      // console.log(res);
    }, error => {
      // console.log(error);
      if (error.error.userMessage){
        this.toastrService.warning(error.error.userMessage);
      }else {
        this.toastrService.warning('Something went to be wrong!');
      }
      this.ngxUiLoaderService.stop();
    });
  }
}
