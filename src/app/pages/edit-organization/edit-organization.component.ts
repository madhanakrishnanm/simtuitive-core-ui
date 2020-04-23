import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrganizationService} from '../../services/organization.service';

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.scss']
})
export class EditOrganizationComponent implements OnInit {

  organizationForm: FormGroup;
  organizationId = null;
  subscribe = null;
  organization = {};
  constructor(public router: Router,
              public route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private organizationService: OrganizationService
  ) {
  }

  ngOnInit(): void {
    this.organizationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      dealOwner: ['', [Validators.required]],
      dealOwnerEmail: ['', [Validators.required, this.emailValidator]],
      dealOwnerMobile: ['', [Validators.required, this.mobileValidator]],
      creditLimit: [0, [Validators.required]],
      status: ['inactive', [Validators.required]],
    });

    this.subscribe = this.route.params.subscribe(params => {
      this.organizationId = params['id']; // (+) converts string 'id' to a number
      // console.log(this.organizationId);
      if (this.organizationId){
        let payload = {
          orgId: this.organizationId
        };
        this.organizationService.getOrganizationById(payload).subscribe((res: any) => {
          // console.log(res);
          let responseOrganization = res.data;
          this.organization['name'] = responseOrganization['orgName']
          this.organization['location'] = responseOrganization['location']
          this.organization['industry'] = responseOrganization['industry']
          this.organization['dealOwner'] = responseOrganization['clientDealOwnerName']
          this.organization['dealOwnerEmail'] = responseOrganization['clientDealOwnerEmail']
          this.organization['dealOwnerMobile'] = responseOrganization['clientDealOwnerMobile']
          this.organization['creditLimit'] = responseOrganization['creditLimit']
          this.organization['status'] = responseOrganization['status']
          console.log(this.organization);
          this.organizationForm.patchValue(this.organization);
        });
      }

    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  mobileValidator(formControl: AbstractControl) {
    if (!formControl.parent) {
      return null;
    }
    const dealOwnerMobile = formControl.parent.get('dealOwnerMobile').value &&
      formControl.parent.get('dealOwnerMobile').value.toString();
    if (dealOwnerMobile) {
      if (dealOwnerMobile.length < 10 || dealOwnerMobile.length > 10) {
        return {
          maxLimit: {
            dealOwnerMobile: formControl.parent.get('dealOwnerMobile').value
          }
        };
      }
    }
    return null;
  }

  emailValidator(formControl: AbstractControl) {
    if (!formControl.parent) {
      return null;
    }
    const dealOwnerEmail = formControl.parent.get('dealOwnerEmail').value;
    if (dealOwnerEmail) {
      if (!dealOwnerEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        return {
          email: {
            dealOwnerEmail: formControl.parent.get('dealOwnerEmail').value
          }
        };
      }
    }
    return null;
  }

  get f() {
    return this.organizationForm.controls;
  }

  onSubmit() {
    if (this.organizationForm.invalid) {
      return;
    }
    console.log(this.organizationForm.value);
    let payload = this.organizationForm.value;
    this.organizationService.editOrganization(payload).subscribe((res: any) => {
      console.log(res);
    });
  }
}