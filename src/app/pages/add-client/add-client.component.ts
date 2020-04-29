import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {OrganizationService} from '../../services/organization.service';
import {ClientService} from '../../services/client.service';
import {RoleService} from '../../services/role.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  clientForm: FormGroup;
  organizations = [];
  roles = [];
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private organizationService: OrganizationService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private roleService: RoleService,
              private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      organization: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, this.emailValidator]],
      password: ['', [Validators.required]],
      gst: ['', [Validators.required]],
      pan: ['', [Validators.required]],
      role: ['Client', [Validators.required]],
    });

    this.organizationService.getAllOrganization({}).subscribe((res: any) => {
      console.log(res);
      this.organizations = res.data;
      this.roleService.getAllRole({}).subscribe((res: any) => {
        console.log(res);
        this.roles = res.data;
        this.clientForm.patchValue({
          role : this.roles.find(o => o.roleName === 'Client')
        })
      });
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
    return this.clientForm.controls;
  }

  changeStatus(event) {
    console.log(event);
  }

  onSubmit() {
    if (this.clientForm.invalid) {
      return;
    }
    this.ngxUiLoaderService.start();
    console.log(this.clientForm.value);
    const payload = this.clientForm.value;
    payload['organizationId'] = payload['organization']['organizationId']
    delete payload['organization'];
    payload['roleId'] = payload['role']['roleId'];
    payload['role'] = payload['role']['roleName'];
    this.clientService.addClient(payload).subscribe((res: any) => {
      console.log(res);
      this.ngxUiLoaderService.stop();
      this.router.navigate(['/clients'])
    }, error => {
      this.ngxUiLoaderService.stop();
    });
  }

}
