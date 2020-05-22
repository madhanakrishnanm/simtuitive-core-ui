import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {LicenseService} from "../../services/license.service";
import {ToastrService} from "ngx-toastr";
import {OrganizationService} from "../../services/organization.service";

@Component({
  selector: 'app-edit-license',
  templateUrl: './edit-license.component.html',
  styleUrls: ['./edit-license.component.scss']
})
export class EditLicenseComponent implements OnInit {

  isLoading = false;
  subscribe = null;
  licenseId = null;
  license: any = {};
  initialProduct = '';
  products = [
    {
      name: 'Advance Excel',
      id:"1"
    },
    {
      name: 'Operational Excellence',
      id:"2"
    },
  ];
  organizations = [];
  paymentStatuses = ['Paid', 'Pending', 'Incomplete'];
  licenseForm: FormGroup;
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private ngxUiLoaderService: NgxUiLoaderService,
              public route: ActivatedRoute,
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
      numberOfLicense: ['',[Validators.required]],
      paymentStatus: [null,[Validators.required]],
      creditLimit: ['',[Validators.required]],
      narration: ['',[Validators.required]],
      sellingPrice: ['',[Validators.required]],
      dealSize: ['',[Validators.required]]
    });

    this.subscribe = this.route.params.subscribe(params => {

      this.licenseId = params.id; // (+) converts string 'id' to a number
      // console.log(this.organizationId);
      if (this.licenseId) {
        const payload = {
          id: this.licenseId
        };
        this.licenseService.getLicenseById(payload).subscribe((res: any) => {

          const license = res.data;
          console.log(license);
          this.license.numberOfLicense = license.numberOfLicense;
          this.license.paymentStatus = license.paymentStatus;
          this.license.creditLimit = license.creditLimit;
          this.license.narration = license.narration;
          this.license.sellingPrice = license.sellingPrice;
          this.license.dealSize = license.dealSize;
          // this.license.productName = this.products.find(o => o.id === license.productId);
          this.license.productName = license.productName;
          this.organizationService.findOrganizationName({}).subscribe((res: any) => {
            console.log(res);
            this.organizations = res.data;
            this.license.organization = license.organization
            this.licenseForm.patchValue(this.license);
            console.log(this.licenseForm.value);
            console.log("license");
            console.log(this.license);
            this.isLoading = false;
          }, error => {
            this.ngxUiLoaderService.stop();
          })

        }, error => {
          this.ngxUiLoaderService.stop();
        });
      }
    });
  }

  searchOrganization(keyword){
    let payload = {
      query : keyword
    };
    console.log(payload);
    this.findOrganizationName(payload);
  }
  findOrganizationName(payload){
    this.organizationService.findOrganizationName(payload).subscribe((res: any) => {
      console.log(res);
      this.organizations = res.data;
    })
  }
  onSubmit() {

    if (this.licenseForm.invalid) {
      return;
    }

    this.ngxUiLoaderService.start();
    const payload = {...this.licenseForm.value};
    payload['licenseId'] = this.licenseId;
    if (typeof payload['productName'] === 'object'){
      payload['productId'] = payload['productName']['id']
      payload['productName'] = payload['productName']['name']
    }
    payload['orgId'] = "5ea04f13683ba84bccce5fde";
    console.log(payload);
    this.licenseService.editLicense(payload).subscribe((res: any) => {
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
