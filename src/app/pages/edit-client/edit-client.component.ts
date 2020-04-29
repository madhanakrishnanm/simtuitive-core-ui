import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OrganizationService} from '../../services/organization.service';
import {ClientService} from '../../services/client.service';
import {RoleService} from '../../services/role.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  clientForm: FormGroup;
  organizations = [];
  clientId = null;
  roles = [];
  client: any = {};
  subscribe = null;
  constructor(public router: Router,
              public route: ActivatedRoute,
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
      gst: ['', [Validators.required]],
      pan: ['', [Validators.required]],
    });

    this.subscribe = this.route.params.subscribe(params => {

      this.clientId = params.id; // (+) converts string 'id' to a number
      // console.log(this.organizationId);
      if (this.clientId) {
        const payload = {
          userId: this.clientId
        };
        this.clientService.getClientById(payload).subscribe((res: any) => {
          console.log(res);
          const client = res.data;
          this.client.name = client.userName;
          this.client.email = client.userEmail;
          this.client.gst = client.gst;
          this.client.pan = client.pan;

          this.organizationService.getAllOrganization({}).subscribe((res: any) => {
            console.log(res);
            this.organizations = res.data;
            this.client.organization = this.roles.find(o => o.roleName === 'Client')
            this.clientForm.patchValue(this.client);
          }, error => {
            this.ngxUiLoaderService.stop();
          });
          this.ngxUiLoaderService.stop();
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
