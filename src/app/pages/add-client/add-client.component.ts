import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {OrganizationService} from '../../services/organization.service';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  clientForm: FormGroup;

  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private clientService: ClientService
  ) {
  }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
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
    return this.clientForm.controls;
  }

  changeStatus(event) {
    console.log(event);
  }

  onSubmit() {
    if (this.clientForm.invalid) {
      return;
    }
    console.log(this.clientForm.value);
    const payload = this.clientForm.value;
    this.clientService.addClient(payload).subscribe((res: any) => {
      console.log(res);
    });
  }

}
