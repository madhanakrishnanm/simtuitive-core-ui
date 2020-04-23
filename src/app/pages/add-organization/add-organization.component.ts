import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrganizationService} from '../../services/organization.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {

  organizationForm: FormGroup;

  constructor(public router: Router,
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

  telephoneValidator(formControl: AbstractControl) {
    if (!formControl.parent) {
      return null;
    }
    const customerTelephone = formControl.parent.get('customerTelephone').value
      && formControl.parent.get('customerTelephone').value.toString();
    if (customerTelephone) {
      if (customerTelephone.length < 10 || customerTelephone.length > 10) {
        return {
          maxLimit: {
            customerTelephone: formControl.parent.get('customerTelephone').value
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

  changeStatus(event) {
    console.log(event);
  }

  onSubmit() {
    if (this.organizationForm.invalid) {
      return;
    }
    console.log(this.organizationForm.value);
    let payload = this.organizationForm.value;
    this.organizationService.addOrganization(payload).subscribe((res: any)=>{
      console.log(res);
    })
  }
}
