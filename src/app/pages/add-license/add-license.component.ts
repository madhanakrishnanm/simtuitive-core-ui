import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {OrganizationService} from "../../services/organization.service";
import {LicenseService} from "../../services/license.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.scss']
})
export class AddLicenseComponent implements OnInit {
  isLoading = false;
  products = [
    {
      name: 'Advance Excel',
      id: 1
    },
    {
      name: 'Operational Excellence',
      id: 2
    },
  ];
  organizations = [];
  paymentStatuses = ['Paid', 'Pending', 'Incomplete'];
  licenseForm: FormGroup;
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private ngxUiLoaderService: NgxUiLoaderService,
              private licenseService: LicenseService,
              private toastrService: ToastrService,
              private organizationService: OrganizationService,
            ) { }
    get f() {
      return this.licenseForm.controls;
    }
  ngOnInit(): void {

    this.licenseForm = this.formBuilder.group({
      productName: ['',[Validators.required]],
      organization: ['',[Validators.required]],
      numberOfLicence: ['',[Validators.required]],
      paymentStatus: [null,[Validators.required]],
      creditLimit: ['',[Validators.required]],
      narration: ['',[Validators.required]],
      sellingPrice: ['',[Validators.required]],
      dealSize: ['',[Validators.required]]
    });

  }

  searchOrganization(keyword) {
    const payload = {
      query : keyword
    };
    console.log(payload);
    this.findOrganizationName(payload);
  }
  findOrganizationName(payload) {
    this.organizationService.findOrganizationName(payload).subscribe((res: any) => {
      console.log(res);
      this.organizations = res.data;
    });
  }
  onSubmit() {

    if (this.licenseForm.invalid) {
      return;
    }

    this.ngxUiLoaderService.start();
    const payload = {...this.licenseForm.value};
    payload['productId'] = payload['productName']['id']
    payload['productName'] = payload['productName']['name']
    payload['orgId'] = "5ea04f13683ba84bccce5fde";
    console.log(payload);
    this.licenseService.addLicense(payload).subscribe((res: any) => {
      this.ngxUiLoaderService.stop();
      this.router.navigate(['/license'])
      console.log(res);
    }, error => {
      if (error.error.userMessage){
        this.toastrService.warning(error.error.userMessage);
      }else {
        this.toastrService.warning('Something went to be wrong!');
      }
      this.ngxUiLoaderService.stop();
    });

  }
}
