import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.scss']
})
export class AddLicenseComponent implements OnInit {
  isLoading = false;
  product = [];
  organisations = [];
  paymentStatus = [];
  addLicenceForm: FormGroup;
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private ngxUiLoaderService: NgxUiLoaderService,
            ) { }
    get f() {
      return this.addLicenceForm.controls;
    }
  ngOnInit(): void {
    this.addLicenceForm = this.formBuilder.group({
      product: ['',[Validators.required]],
      organisation: ['',[Validators.required]],
      numberOfLicence: ['',[Validators.required]],
      paymentStatus: ['',[Validators.required]],
      creditLimit: ['',[Validators.required]],
      narration: ['',[Validators.required]],
      sellingPricePerLicense: ['',[Validators.required]],
      dealSize: ['',[Validators.required]]
    });
  }
  onSubmit() {
    const payload = {...this.addLicenceForm};
    console.log(payload);
  }
}
