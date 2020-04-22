import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {

  organizationForm: FormGroup;
  constructor(public router: Router,
  private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.organizationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      dealOwner: ['', [Validators.required]],
      dealOwnerEmail: ['', [Validators.required]],
      dealOwnerMobile: ['', [Validators.required]],
      creditLimit: ['', [Validators.required]],
      status: ['inactive', [Validators.required]],
    });
  }

  get f() {
    return this.organizationForm.controls;
  }
  changeStatus(event){
   console.log(event);
  }

  onSubmit() {
   /* if (this.organizationForm.invalid) {
      return;
    }*/
    console.log(this.organizationForm.value);
  }
}
